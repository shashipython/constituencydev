import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AdminPanel() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [selectedVillage, setSelectedVillage] = useState<string>("");
  const [villageActivities, setVillageActivities] = useState<{ [key: string]: any[] }>({});
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    activity: "",
    date: "",
    status: "Planning",
    description: ""
  });

  const villages = [
    "Saundatti",
    "Yellamma",
    "Hire Angadi",
    "Lokapur",
    "Hire Bagewadi",
    "Dhavaleshwar",
    "Naganur",
    "Kerur",
    "Bennur",
    "Kittur",
    "Renukambi",
    "Shirguppi",
    "Kavatagi",
    "Hire Budanur",
    "Bannikop"
  ];

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login");
    } else {
      const userData = JSON.parse(currentUser);
      if (userData.role !== "admin") {
        navigate("/");
      } else {
        setUser(userData);
      }
    }

    // Load village activities from localStorage
    const storedActivities = localStorage.getItem("villageActivities");
    if (storedActivities) {
      setVillageActivities(JSON.parse(storedActivities));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedVillage) {
      alert("Please select a village first");
      return;
    }

    const newActivity = {
      activity: formData.activity,
      date: formData.date,
      status: formData.status,
      description: formData.description
    };

    const updatedActivities = { ...villageActivities };
    if (!updatedActivities[selectedVillage]) {
      updatedActivities[selectedVillage] = [];
    }
    updatedActivities[selectedVillage].push(newActivity);

    setVillageActivities(updatedActivities);
    localStorage.setItem("villageActivities", JSON.stringify(updatedActivities));

    // Reset form
    setFormData({
      activity: "",
      date: "",
      status: "Planning",
      description: ""
    });
    setShowForm(false);
    alert("Activity added successfully!");
  };

  const handleDeleteActivity = (village: string, index: number) => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      const updatedActivities = { ...villageActivities };
      updatedActivities[village].splice(index, 1);
      setVillageActivities(updatedActivities);
      localStorage.setItem("villageActivities", JSON.stringify(updatedActivities));
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl text-gray-900">Admin Panel - Village Activity Management</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Welcome, {user.name}</span>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl mb-6 text-gray-800">Select Village</h2>
          <select
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-700 bg-white"
          >
            <option value="">-- Choose a Village --</option>
            {villages.map((village) => (
              <option key={village} value={village}>
                {village}
              </option>
            ))}
          </select>
        </div>

        {selectedVillage && (
          <>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-gray-800">
                  Activities in {selectedVillage}
                </h2>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {showForm ? "Cancel" : "+ Add New Activity"}
                </button>
              </div>

              {showForm && (
                <form onSubmit={handleSubmit} className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg mb-4 text-gray-800">Add New Development Activity</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="activity" className="block text-sm mb-2 text-gray-700">
                        Activity Name
                      </label>
                      <input
                        type="text"
                        id="activity"
                        name="activity"
                        value={formData.activity}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        placeholder="e.g., Road Construction Project"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm mb-2 text-gray-700">
                        Date
                      </label>
                      <input
                        type="text"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        placeholder="e.g., April 2026"
                      />
                    </div>
                    <div>
                      <label htmlFor="status" className="block text-sm mb-2 text-gray-700">
                        Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      >
                        <option value="Planning">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm mb-2 text-gray-700">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        placeholder="Brief description of the activity"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Save Activity
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-4">
                {villageActivities[selectedVillage]?.length > 0 ? (
                  villageActivities[selectedVillage].map((activity, index) => (
                    <div key={index} className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-600">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-lg text-gray-900">{activity.activity}</h5>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            activity.status === 'Completed' ? 'bg-green-600 text-white' :
                            activity.status === 'In Progress' ? 'bg-blue-600 text-white' :
                            activity.status === 'Ongoing' ? 'bg-yellow-600 text-white' :
                            'bg-gray-600 text-white'
                          }`}>
                            {activity.status}
                          </span>
                          <button
                            onClick={() => handleDeleteActivity(selectedVillage, index)}
                            className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{activity.description}</p>
                      <p className="text-sm text-gray-500">Date: {activity.date}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No activities added yet for this village.</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {!selectedVillage && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Please select a village to manage its development activities</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

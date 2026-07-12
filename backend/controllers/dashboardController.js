const Vehicle = require("../models/Vehicle");
const Driver = require("../models/Driver");
const Trip = require("../models/Trip");
const Maintenance = require("../models/Maintenance");

exports.getDashboard = async (req, res) => {
  try {
    const totalVehicles = await Vehicle.countDocuments();
    const availableVehicles = await Vehicle.countDocuments({ status: "Available" });
    const maintenanceVehicles = await Vehicle.countDocuments({ status: "Maintenance" });

    const totalDrivers = await Driver.countDocuments();
    const availableDrivers = await Driver.countDocuments({ status: "Available" });

    const totalTrips = await Trip.countDocuments();
    const activeTrips = await Trip.countDocuments({ status: "Dispatched" });
    const completedTrips = await Trip.countDocuments({ status: "Completed" });

    const pendingMaintenance = await Maintenance.countDocuments({
      status: "Pending",
    });

    res.json({
      totalVehicles,
      availableVehicles,
      maintenanceVehicles,
      totalDrivers,
      availableDrivers,
      totalTrips,
      activeTrips,
      completedTrips,
      pendingMaintenance,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const Vehicle = require("../models/Vehicle");

// GET All Vehicles
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Vehicle By ID
exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE Vehicle
exports.createVehicle = async (req, res) => {
  try {
    const {
      registrationNumber,
      vehicleType,
      capacity,
      fuelType,
      status,
      purchaseDate,
    } = req.body;

    const existingVehicle = await Vehicle.findOne({ registrationNumber });

    if (existingVehicle) {
      return res
        .status(400)
        .json({ message: "Registration Number already exists" });
    }

    const vehicle = await Vehicle.create({
      registrationNumber,
      vehicleType,
      capacity,
      fuelType,
      status,
      purchaseDate,
    });

    res.status(201).json({
      success: true,
      message: "Vehicle Created Successfully",
      vehicle,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Vehicle
exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle Updated Successfully",
      vehicle,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
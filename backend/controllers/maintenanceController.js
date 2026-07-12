const Maintenance = require("../models/Maintenance");

// GET All Maintenance Records
exports.getMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.find().populate("vehicle");

    res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Maintenance By ID
exports.getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id).populate("vehicle");

    if (!maintenance) {
      return res.status(404).json({
        message: "Maintenance record not found",
      });
    }

    res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE Maintenance
exports.createMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.create(req.body);

    res.status(201).json({
      success: true,
      message: "Maintenance Created Successfully",
      maintenance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Maintenance
exports.updateMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!maintenance) {
      return res.status(404).json({
        message: "Maintenance record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Maintenance Updated Successfully",
      maintenance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Maintenance
exports.deleteMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id);

    if (!maintenance) {
      return res.status(404).json({
        message: "Maintenance record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Maintenance Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
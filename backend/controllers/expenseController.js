const Expense = require("../models/Expense");

// GET All Expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().populate("vehicle");
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Expense By ID
exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id).populate("vehicle");

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE Expense
exports.createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);

    res.status(201).json({
      success: true,
      message: "Expense Added Successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Expense
exports.updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({
      success: true,
      message: "Expense Updated Successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Expense
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({
      success: true,
      message: "Expense Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
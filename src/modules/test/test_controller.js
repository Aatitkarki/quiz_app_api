const mongoose = require("mongoose");

const Test = mongoose.model("Test");

exports.readAll = async (req, res) => {
  const resp = await Test.find({}, "name phone createAt");
  if (!resp || resp.length === 0) throw "No item found";
  res.json(response);
};

exports.store = async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) throw "Required field name,phone";

  const newItem = new Test({ name, phone });
  await newItem.save();
  res.json({ message: "Item added successfully" });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const item = await Test.findById(id);
  if (!item) throw "Cannot find the object";
  await item.remove();
  res.json({ message: "Item deleted successfully" });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const item =  await Test.findById(id);
  if (!item) throw "Cannot find the object";
  await   item.update({ ...req.body });
  res.json({ message: "Item updated successfully" });


};

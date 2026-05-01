import { v4 as uuid } from "uuid";

const fileDB = [];

const format = (f) => ({
  _id: f._id,
  name: f.name,
  size: f.size,
  mimetype: f.mimetype
});

export const files = (req, res) => {
  res.json(fileDB.map(format)); 
};

export const fileById = (req, res) => {
  const file = fileDB.find(f => f._id === req.params.id);
  if (!file) return res.status(404).json({ message: "File not found" });

  res.json(format(file));
};

export const downloadFileById = (req, res) => {
  const file = fileDB.find(f => f._id === req.params.id);
  if (!file) return res.status(404).json({ message: "File not found" });

  res.setHeader("Content-Type", file.mimetype);
  res.attachment(file.name);
  res.send(file.buffer);
};

export const uploadFile = (req, res) => {
  if (!req.files?.length) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  const uploaded = req.files.map(file => {
    const newFile = {
      _id: uuid(),
      name: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      buffer: file.buffer
    };

    fileDB.push(newFile);
    return format(newFile);
  });

  res.json(uploaded);
};

export const deleteFile = (req, res) => {
  const index = fileDB.findIndex(f => f._id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "File not found" });

  fileDB.splice(index, 1);
  res.json({ message: "Deleted" });
};
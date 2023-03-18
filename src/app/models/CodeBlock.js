const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const CodeBlockSchema = new Schema(
  {
    _id: { type: String, default: uuidv4, unique: false },
    description: { type: String, unique: false },
    title: { type: String, unique: false },
    code: { type: Object, unique: false },
    author: { type: Object, unique: false },
    filter: { type: String, unique: false },
    main_code: { type: String, unique: false },
    approve: { type: Boolean, unique: false, default: false },
  },
  {
    _id: false,
    timestamps: true,
  }
);

const CodeBlock = mongoose.model("CodeBlock", CodeBlockSchema);
module.exports = CodeBlock;

const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add your name"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [100, "Name cannot exceed 100 characters"],
        },

        email: {
            type: String,
            required: [true, "Please add an email"],
            trim: true,
            lowercase: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "Please add a valid email",
            ],
        },

        phone: {
            type: String,
            trim: true,
            maxlength: [30, "Phone number cannot exceed 30 characters"],
        },

        subject: {
            type: String,
            trim: true,
            maxlength: [200, "Subject cannot exceed 200 characters"],
        },

        message: {
            type: String,
            required: [true, "Please add a message"],
            trim: true,
            minlength: [100, "Message must be at least 100 characters"],
            maxlength: [5000, "Message cannot exceed 5000 characters"],
        },

        isRead: { type: Boolean, default: false, index: true },
        isStarred: { type: Boolean, default: false, index: true },
    },
    {
        timestamps: true,
    }
);

ContactSchema.index({ createdAt: -1 });

module.exports = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
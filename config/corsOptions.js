const allowedOrigins = [
    "https://etsmakka.vercel.app",
    "https://ets-makka.vercel.app",
    "https://makka-edu.vercel.app",
    "http://localhost:3000"
];

exports.corsOption = {
    origin: (origin, callback) => {
        const isDevelopment = process.env.NODE_ENV !== "production";
        
        if (allowedOrigins.indexOf(origin) !== -1 || (isDevelopment && !origin)) {
            callback(null, true);
        } else {
            callback(new Error("Access Denied: Not allowed by CORS security policy"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};
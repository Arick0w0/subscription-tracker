import aj from "../config/arcjet.js";

const arcjectMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({
          error: "Too Many Requests: Rate limit exceeded",
        });
      }
      if (decision.reason.isBot()) {
        return res.status(403).json({
          error: "Forbidden: Bot traffic detected",
        });
      }
      return res.status(403).json({
        success: false,
        message: "Forbidden: Access denied by Arcjet",
      });
    }

    next();
  } catch (error) {
    console.log("Arcjet Middleware Error:", error);
    next(error);
  }
};

export default arcjectMiddleware;

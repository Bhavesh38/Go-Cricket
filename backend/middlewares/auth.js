
// const jwt = require("jsonwebtoken");
import jwt  from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers.accesstoken;
//   console.log(token)
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        //console.log(decoded);
        //console.log(req.user)
    }
    catch (err) {
        return res.status(401).send(err);
    }
    return next();
};

export default verifyToken;

// import jwt from "jsonwebtoken";


// const auth = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization?.split(" ")[1];
//         const isCustomAuth = token?.length < 500;
//         console.log("hii");
//         let decodeData;
//         if (token && isCustomAuth) {
//             decodeData = jwt.verify(token, process.env.JWT_SECRET);
//             req.userId = decodeData?.in;
//         } else {
//             decodeData = jwt.decode(token);
//             req.userId = decodeData?.sub;
//         }

//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default auth;
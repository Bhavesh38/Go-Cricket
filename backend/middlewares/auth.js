import jwt from "jsonwebtoken";


//want to like a post
// click the like button > auth middleware (next) > like controllers...
const auth = async (req, res, next) => {
    try {
        // console.log(req.headers);
        const token = req.headers.authorization?.split(" ")[1];
        const isCustomAuth = token?.length < 500;

        let decodeData;
        if (token && isCustomAuth) {
            decodeData = jwt.verify(token, 'bhavesh');

            req.userId = decodeData?.in;
        } else {
            decodeData = jwt.decode(token);
            req.userId = decodeData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;
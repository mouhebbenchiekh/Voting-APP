import  passport  from "passport";
import passportJWT from "passport-jwt"
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
import passportlocal from "passport-local";
import { User } from './models/users.js';
const LocalStrategy = passportlocal.Strategy;
passport.use(new LocalStrategy({
        email: 'email',
        password: 'password'
    }, 
    function (email, password, cb) {
        console.log('d5alll lena')
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return User.findOne({email, password})
           .then(user => {
               if (!user) {
                   return cb(null, false, {message: 'Incorrect email or password.'});
               }
               return cb(null, user, {message: 'Logged In Successfully'});
          })
          .catch(err => cb(err));
    }
));


 passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'your_jwt_secret'
    },
    function (jwtPayload, cb) {

        console.log(jwtPayload._id)
        
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findById(jwtPayload._id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
import express from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/users.js';
import { Subject } from '../models/subject.js';
import { Vote } from '../models/votes.js';
const router  = express.Router();

/* POST login. */
 router.post('/CreateSubject',async (req, res)=> {

        try {
            let subject = await new Subject(req.body);
            if (subject){
                subject = await subject.save();
                return res.json(subject);
            }
            
        } catch (error) {
            return res.status(400).json({
                message:error
            })
        }
        });
  router.post('/voteFor', async (req,res)=>{
      let user =req.user;
      const vote= ConvertVote(user,req.body)
          
      let docVote= await new Vote(vote);
      if(docVote){
          docVote= await docVote.save();
          return res.json({docVote});
      }

  })   
  
 export function ConvertVote(user,body) {

    if(!user._id) return "user non autorisé"
     if( !body.subject || !body.choice) return "bad req"
       
    

    return {
          user:user._id,
          subject:body.subject,
          choice:body.choice
    }
      
  }
  





export default router;
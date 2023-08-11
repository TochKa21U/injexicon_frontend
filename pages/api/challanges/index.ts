import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData, sampleCreateLevel } from '../../../utils/sample-data'
import { SubmitNewLevel } from '../../../interfaces'
import {Axios} from 'axios'
// Mask API in here
// Call the utils to get the api call and respond in here 
// need to use getServerSideProps when rendering from this response
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props
// Or alternatively we can directly call it as well
// await fetch("/api/challanges", {
//   method: "POST",
//   body: JSON.stringify(data),
// });

// CREATE LEVEL

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {method} = req;
  if (method !== "POST"){
    res.setHeader("Allow", ["GET", "POST","PUT"]);
    res.status(405).json({
        data: null,
        error: { message: `Method ${method} Not Allowed` },
    });
  }
  try {
    const {secretphrase, submission_input } = req.body;

    if (!(secretphrase && submission_input)) {
      // throw new Error('Malformed Body')
      res.status(400).json({"error":"Malformed Body"})
    }
    const newLevelSubmissionPayload : SubmitNewLevel = {
      secretphrase: secretphrase,
      submission_input: submission_input
    }
    // API call will happen here
    const answer = await sampleCreateLevel(newLevelSubmissionPayload);
    // API call will happen here
    if(answer.error){
      res.status(400).json(answer);
    }
    res.status(201)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler

import type { NextApiRequest, NextApiResponse } from 'next'
import { SubmitAnswer } from '../../../interfaces';
import { sampleSubmitAnswer } from '../../../utils/sample-data';

// GET LEVEL
const GEThandle = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        // Call API for Specific Level
    } catch (err:any) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

// SUBMIT ANSWER TO LEVEL
const POSThandle = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const { secretphrase } = req.body;
    try {
        const payload : SubmitAnswer = {
            levelcode: "id",
            secretphrase:secretphrase
        }
        // CALL API HERE
    } catch (err:any) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req;
    switch (method) {
        case "GET":
            return GEThandle(req,res);
        case "POST":
            return POSThandle(req,res);
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).json({
                data: null,
                error: { message: `Method ${method} Not Allowed` },
            });
    }
}
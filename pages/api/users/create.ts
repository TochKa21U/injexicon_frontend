import type { NextApiRequest, NextApiResponse } from 'next'

// WILL MOVE IT TO index.ts AFTER MOCK DATA HAS BEEN REMOVED
// POST --> LOGIN , PUT --> CREATE , GET --> GETUSER

const GETreq = async (req: NextApiRequest, res: NextApiResponse) => {
return res.status(200).json({
    data: {},
    error: null,
});
};
  
const POSTreq = async (req: NextApiRequest, res: NextApiResponse) => {
return res.status(200).json({
    data: {},
    error: null,
});
};

const PUTreq = async (req: NextApiRequest, res: NextApiResponse) => {
    return res.status(200).json({
        data: {},
        error: null,
    });
    };

export default async function handler(req:NextApiRequest,res : NextApiResponse) {
    //
    const { method } = req;
    switch (method) {
        case "GET":
            return GETreq(req, res);
        case "POST":
            return POSTreq(req,res);
        case "PUT":
            return PUTreq(req,res)
        default:
            res.setHeader("Allow", ["GET", "POST","PUT"]);
            res.status(405).json({
                data: null,
                error: { message: `Method ${method} Not Allowed` },
            });
    }
}
const {FACEBOOK_ID} = process.env


module.exports = {

        login: async (req, res) => {
            res.status(200).send(FACEBOOK_ID)
        }
}
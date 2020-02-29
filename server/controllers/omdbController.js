const { OMDB } = process.env
const axios = require('axios')
const movieRequest = `http://www.omdbapi.com/?apikey=${OMDB}&`
module.exports = {

    searchByTitle: async (req, res) =>{
        const { title } = req.body
        axios.get(`${movieRequest}s=${title}`).then(response =>{
         
            return res.status(200).send(response.data.Search)
        })
    } 
}
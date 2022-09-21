

module.exports = class ScoreController {
   async find(req, res) {

      try {
         res.status(200).send({ message: 'ok' })
      } catch (error) {
         res.status(500).send(error)
      }
   }
}




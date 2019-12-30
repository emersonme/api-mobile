const Lancamentos = require('../models/lancamentos')
const {notFound} = require('../models/error')
const FieldsToLower = require('../helpers/FieldsToLower')

exports.getMain = async (req, res, next) => {
  const {data} = req.body
  let lucro = 0
  let total = 0
  try {
    let lancs = await Lancamentos.findByDate(data)
    if (lancs.length === 0) {
      throw notFound
    }

    lancs.map(lanc => {
      lucro = lucro + lanc.TOTAL * lanc.COMISSAO
      total += lanc.TOTAL
    })

    return res.status(200).json({total, lucro, lancamentos: lancs})
  } catch (error) {
    next(error)
  }
}

exports.postLancamento = async (req, res, next) => {
  const lancamento = req.body
  try {
    await Lancamentos.insert(lancamento)
    res.status(200).json({message: 'Recurso criado com sucesso'})
  } catch (error) {
    next(error)
  }
}

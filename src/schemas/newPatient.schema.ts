import * as yup from "yup"
import { SchemaOf } from "yup"
import { IPacienteRequest } from "../interfaces/pacientes"

export const newPatientSchema: SchemaOf<IPacienteRequest> = yup.object().shape({
  nome: yup.string().required(),
  cpf: yup.string().required().max(11, "CPF inválido!"),
  email: yup.string(),
  dataNascimento: yup.date().required(),
  cidadeOrigem: yup.string().required(),
  idade: yup.number().required(),
  nomeBebe: yup.string(),
  nomeDoPai: yup.string(),
  diagnostico: yup.string().required(),
  procedimentos: yup.string(),
  cariotipo: yup.string(),
  criadoEm: yup.date().required(),
  atualizadoEm: yup.date().required(),
  estaAtivo: yup.boolean().required(),
  arquivos_id: yup.array(),
})

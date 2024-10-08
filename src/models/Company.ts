import mongoose, { Schema, Document } from 'mongoose';

export interface ICompany extends Document {
  code: string;
  name: string;
  nit: string;
  address: string;
  legalRepresentative: string;
  contactPhone: string;
}

const companySchema = new Schema<ICompany>({
  code: { type: String, required: true },
  name: { type: String, required: true },
  nit: { type: String, required: true },
  address: { type: String, required: true },
  legalRepresentative: { type: String, required: true },
  contactPhone: { type: String, required: true },
});

export default mongoose.models.Company || mongoose.model<ICompany>('Company', companySchema);

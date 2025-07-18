export interface BaseComplaint {
  id: string;
  details: string;
  name: string;
  address: string;
  email: string;
  phone1: string;
  phone2: string;
  phone3: string;
  location: {
    type: string;
    coordinates: Array<number>;
  };
  locationSummary: string;
  locationDetail: string;
  reportedBy?: string;
  reportedByOther: string;
  incidentDateTime?: Date;
  createdBy: string;
  updatedBy: string;
  webeocId: string;
  isPrivacyRequested: string;
  status: string;
  ownedBy: string;
  reportedOn: Date;
  updatedOn: Date;
  complaintMethodReceivedCode: string;
  referenceNumber: string;
  parkGuid?: string;
  type: string;
}

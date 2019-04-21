import { PersonalData } from './personal-data';

export class ContactRequest {
    //public constructor(init?: Partial<ContactRequest >){
      //  Object.assign(this, init);
    //}
    personalData: PersonalData = new PersonalData();
    requestType: any = null;
    text: string = null;
    mytext: string = null;
}

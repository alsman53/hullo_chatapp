import { Contact, ContactFactory } from "../entities/contact";
import { Message, MessageFactory } from "../entities/Message";
import { Contacts } from "../assets/contData"
/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />


export interface ConverationRepository {
    convos : Array<any>;
    add(contact: Contact);
    addMessage(name: string, message: Message);
    seedDb();

}

export class InMemConvRepo implements ConverationRepository {
    convos: Array<Contact>;

    constructor() {
        this.convos = [];
        this.seedDb();
    }

    add(contact: Contact) :Contact{
        this.convos.push(contact);
        return contact;
    };

    addMessage(name: string, message: Message) : Message {
        for (let contact of this.convos) {
            if (contact.name = name) {
                contact.messages.push(message);
            }
        }
        return message;
    };

    // getNames(): Array<string> {
    //     return this.convos.map(c => c.name);
    // }

    seedDb() {
        let jsonConvos = Contacts;
        let contactFactory = new ContactFactory();

        jsonConvos.contacts.forEach(contact => {
            this.convos.push(contactFactory.create(contact))
        });
    }
}
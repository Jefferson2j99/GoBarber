import { container } from 'tsyringe';
import mailconfig from '@config/mail';

import IMailProvider from '../MailProvider/models/IMailProvider';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProdiver from './implementations/SESMailProdiver';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProdiver),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailconfig.driver],
);

#ifndef __TRANSACTIONSTATUS_H__
#define __TRANSACTIONSTATUS_H__

namespace ons {

enum TransactionStatus  {
    CommitTransaction=0,//�ύ����
    RollbackTransaction=1,//�ع�����
    Unknow=2,//δ֪״̬��һ�����û��޷�ȷ�������ǳɹ�����ʧ��ʱʹ��
};


}

#endif

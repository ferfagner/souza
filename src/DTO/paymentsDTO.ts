

export interface PaymentDTO {
    anticipable: boolean;
    anticipated: boolean;
    bankSlipUrl: string | null;
    billingType: string;
    clientPaymentDate: string | null;
    creditDate: string | null;
    custody: string | null;
    customer: string;
    dateCreated: string;
    deleted: boolean;
    description: string;
    discount:{
    dueDateLimitDays: number;
    limitDate: string | null;
    type: string;
    value: number;
    };
    dueDate: string;
    estimatedCreditDate: string | null;
    externalReference: string | null;
    fine: {
      type: string;
      value: number;
    };
    id: string;
    installmentNumber: number | null;
    interest: {
      type: string;
      value: number;
    };
    interestValue: number | null;
    invoiceNumber: string;
    invoiceUrl: string;
    lastBankSlipViewedDate: string | null;
    lastInvoiceViewedDate: string | null;
    netValue: number;
    nossoNumero: string | null;
    object: string;
    originalDueDate: string;
    originalValue: number | null;
    paymentDate: string | null;
    paymentLink: string | null;
    pixTransaction: string | null;
    postalService: boolean;
    refunds: any[] | null; // Altere 'any[]' conforme a estrutura real dos reembolsos
    status: string;
    subscription: string;
    transactionReceiptUrl: string | null;
    value: number;
  }
  
  export interface BasePaymentDTO{
    data: [PaymentDTO];
    hasMore: boolean;
    limit: number;
    object: string;
    offset: number;
    totalCount: number
  
}
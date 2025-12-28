***Tags***: #lld #uml #oops #diagrams 
## What Is a Sequence Diagram?
A **sequence diagram** shows:

- **Who** is involved (objects / services)
- **Who talks to whom**
- **In what order**
- **Over time**
It answers this question:

> “When a feature runs, which objects interact, and in what exact sequence?”

---
#### Example
![[Pasted image 20251228161158.png]]


```mermaid
sequenceDiagram
    participant User
    participant API
    participant OrderService
    participant PaymentService
    participant DB

    User->>API: placeOrder()
    API->>OrderService: createOrder()
    OrderService->>PaymentService: processPayment()

    alt Payment Successful
        PaymentService-->>OrderService: ok
        OrderService->>DB: saveOrder()
        DB-->>OrderService: saved
        OrderService-->>API: confirmed
        API-->>User: Order Confirmed
    else Payment Failed
        PaymentService-->>OrderService: failed
        OrderService-->>API: error
        API-->>User: Payment Failed
    end

```

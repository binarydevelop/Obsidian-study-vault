
![Image](https://media.geeksforgeeks.org/wp-content/uploads/20220330131350/StatediagramforserverandclientmodelofSocketdrawio2-448x660.png?utm_source=chatgpt.com)

---
## 1.Server Side

This shows how a **server prepares itself** to accept connections.
### **Step 1: Socket()**
- The server creates a **socket**.
- At this point, it’s just an empty communication endpoint.
- Think of it as **creating a phone**, but not dialing or receiving calls yet.
---
### **Step 2: Bind()**

- The socket is **bound to a specific port number** (and IP address).
- Example:
- ```yaml
    IP: 192.168.1.10
    Port: 8080
    ```
- This tells the OS:
    > “Any data coming to port 8080 should be delivered to this socket.”
---

### **Step 3: Listen()**
- The server puts the socket into **listening mode**.
- Now it waits for incoming connection requests from clients.
- The socket is called a **listening socket**.
---
### **Step 4: Accept()**

- A client requests a connection.
- The server **accepts** it.
- **Important:**
    - `accept()` creates a **new socket** for this specific client.
    - The original socket continues listening for other clients.
📌 This is why many clients can connect to **the same port** simultaneously.

---
## Client Side
This shows how a **client initiates a connection**.
### **Step 1: Socket()**
- The client also creates a socket.
- Again, just creating a communication endpoint.
---
### **Step 2: Connect()**
- The client calls `connect()` using:
    - Server IP address
    - Server port number
- Example:
    ```yaml
    connect(192.168.1.10, 8080)
    ```

 This triggers a connection request to the server’s listening socket.

---
## Established Connection 
Once:
- Client calls `connect()`
- Server calls `accept()`
A **dedicated socket pair** is created:

```
Client Socket  <======>  Server Socket
```

Each socket is uniquely identified by:

```
(Source IP, Source Port, Destination IP, Destination Port, Protocol)
```

This pair is what we call a **socket connection**.

---
## Data Transfer Phase
- Both sides can now:
    - **Send data**
    - **Receive data**
- This continues until one side closes the connection.
---
## Close()

- Either client or server can close the socket.
- Resources are released.
- The server’s **listening socket remains active** for new clients.
---
A **port** is a **numbered endpoint** on a computer that identifies **which application or service** should receive incoming network data.
- Range: **0–65535**
- Each port is associated with a specific service or application
- Helps the operating system route data to the correct program
### Socket
A **socket** is a **communication endpoint** that combines:
- **IP address**
- **Port number**
- **Protocol** (TCP or UDP)
A socket represents an **active connection** used by applications to send and receive data.
Example:
```yaml
192.168.1.10 : 8080 (TCP)
```
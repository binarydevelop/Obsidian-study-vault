#### Example: Parking Lot https://workat.tech/machine-coding/practice/design-parking-lot-qm6hwq4wkhp8

#### Step 1: Identify Core Entities (Nouns → Classes)
Underline nouns in the problem statement:
- ParkingLot
- Floor
- Slot
- Vehicle
- Ticket
Each usually becomes a **class**.

---
#### Step 2: Identify Behaviors (Verbs → Methods)

From requirements:
- create parking lot
- add floors
- add slots
- park vehicle
- unpark vehicle
- display free/occupied slots
These usually become **methods in services/managers**.
---
#### Step 3: Identify Variations (Enums / Polymorphism)

Whenever you see:
- “different types”
- “rules based on type”
→ Use **enum or inheritance**

Examples:
- VehicleType: CAR, BIKE, TRUCK
- SlotType: CAR, BIKE, TRUCK
---
#### Step 4: Decide Responsibility (SOLID Thinking)

Ask:
- Who owns slots? → Floor
- Who owns floors? → ParkingLot
- Who decides parking logic? → ParkingLotService
- Who generates tickets? → TicketService
Avoid god objects.
---
#### Step 5: Data Structures (Important for Interviews)
Choosing the **right DS** is critical:
- Floors in a list (ordered)
- Slots in a list (slot number = index + 1)
- Active tickets in a map `<ticketId, Ticket>`
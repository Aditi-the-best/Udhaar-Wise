import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import schemesData from "./schemes.json";

type IconName = "home" | "ledger" | "stock" | "passport" | "schemes" | "chat" | "bell" | "search" | "arrow" | "check" | "clock" | "spark" | "wallet" | "box" | "send" | "edit" | "mic" | "plus" | "trend" | "lock" | "close" | "chevron"

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  ledger: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </>
  ),
  stock: (
    <>
      <path d="m4 7 8-4 8 4-8 4-8-4Z" />
      <path d="m4 7v10l8 4 8-4V7M12 11v10" />
    </>
  ),
  passport: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M7 15a6 6 0 0 1 10-6M12 12l4-3" />
    </>
  ),
  schemes: (
    <>
      <path d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18M12 3l9 5H3l9-5Z" />
    </>
  ),
  chat: <path d="M20 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A8 8 0 1 1 20 15Z" />,
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3ZM18 16l.7 2.3L21 19l-2.3.7L18 22l-.7-2.3L15 19l2.3-.7L18 16Z" />
    </>
  ),
  wallet: (
    <>
      <path d="M4 6h14a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h11" />
      <path d="M16 12h6v4h-6a2 2 0 0 1 0-4Z" />
    </>
  ),
  box: (
    <>
      <path d="M3 6h18v14H3zM3 10h18M9 6V3h6v3" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  edit: (
    <>
      <path d="M13 5 4 14v6h6l9-9" />
      <path d="m15 3 6 6" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  trend: <path d="m3 17 5-5 4 3 8-9M15 6h5v5" />,
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevron: <path d="m9 18 6-6-6-6" />,
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  full = false,
  type = "button",
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "amber"
  icon?: IconName
  onClick?: () => void
  full?: boolean
  type?: "button" | "submit"
}) {
  return (
    <button
      type={type}
      className={`button button-${variant}${full ? " button-full" : ""}`}
      onClick={onClick}
    >
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </button>
  )
}

function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: "green" | "amber" | "red" | "blue" | "neutral"
}) {
  return <span className={`chip chip-${tone}`}>{children}</span>
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <section className={`card ${className}`}>{children}</section>
}

const navItems: { id: string; label: string; icon: IconName }[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "udhaar", label: "Udhaar", icon: "ledger" },
  { id: "stock", label: "Stock", icon: "stock" },
  { id: "passport", label: "Passport", icon: "passport" },
  { id: "schemes", label: "Schemes", icon: "schemes" },
]

function Logo() {
  return (
    <div className="logo">
      <span className="logo-mark">उ</span>
      <span>
        Udhaar <b>Wise</b>
      </span>
    </div>
  )
}

function AppShell({
  page,
  setPage,
  children,
}: {
  page: string
  setPage: (page: string) => void
  children: ReactNode
}) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Logo />
        <div className="shop-card">
          <span className="avatar">GS</span>
          <span>
            <b>Gupta General Store</b>
            <small>Jaipur, Rajasthan</small>
          </span>
          <Icon name="chevron" size={16} />
        </div>
        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={page === item.id ? "active" : ""}
              onClick={() => setPage(item.id)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.id === "schemes" && <i>3</i>}
            </button>
          ))}
          <span className="nav-label">TOOLS</span>
          <button
            className={page === "capture" ? "active" : ""}
            onClick={() => setPage("capture")}
          >
            <Icon name="chat" />
            <span>WhatsApp Orders</span>
          </button>
        </nav>
        <div className="support-card">
          <span className="support-icon">
            <Icon name="spark" />
          </span>
          <b>Need help?</b>
          <small>Ask Wise AI in Hindi or English.</small>
          <Button variant="secondary">Ask Wise AI</Button>
        </div>
        <div className="profile-row">
          <span className="avatar avatar-green">RG</span>
          <span>
            <b>Ramesh Gupta</b>
            <small>Shop owner</small>
          </span>
          <span className="online-dot" />
        </div>
      </aside>
      <main className="main">
        <header className="topbar">
          <div className="mobile-logo">
            <Logo />
          </div>
          <div className="search">
            <Icon name="search" size={18} />
            <span>Search customers, items...</span>
            <kbd>⌘ K</kbd>
          </div>
          <button className="icon-button" aria-label="Notifications">
            <Icon name="bell" />
            <span />
          </button>
          <span className="today">Tuesday, 18 June</span>
        </header>
        <div className="content">{children}</div>
      </main>
      <nav className="bottom-nav" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={page === item.id ? "active" : ""}
            onClick={() => setPage(item.id)}
          >
            <Icon name={item.icon} size={21} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

function PageHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string
  title: string
  description: string
  action?: ReactNode
}) {
  return (
    <div className="page-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </div>
  )
}

type Activity = {
  initials: string
  name: string
  detail: string
  value: string
  time: string
  tone: string
}

const initialActivities: Activity[] = [
  {
    initials: "SK",
    name: "Sunita Kumari",
    detail: "Udhaar payment received",
    value: "+ ₹1,250",
    time: "10:42 AM",
    tone: "green",
  },
  {
    initials: "AM",
    name: "Amit Mishra",
    detail: "New WhatsApp order · 5 items",
    value: "₹840",
    time: "9:58 AM",
    tone: "blue",
  },
  {
    initials: "RS",
    name: "Ravi Sharma",
    detail: "Udhaar added",
    value: "₹620",
    time: "9:20 AM",
    tone: "amber",
  },
  {
    initials: "NK",
    name: "Neha Kapoor",
    detail: "UPI payment received",
    value: "+ ₹2,100",
    time: "Yesterday",
    tone: "violet",
  },
]

function HomeDashboard({
  revenue,
  orderCount,
  activities,
  onAddSale,
  setPage,
}: {
  revenue: number
  orderCount: number
  activities: Activity[]
  onAddSale: () => void
  setPage: (page: string) => void
}) {
  return (
    <>
      <PageHeading
        eyebrow="NAMASTE, RAMESH JI"
        title="Aaj ka hisaab"
        description="Your shop is doing well. Here’s what’s happening today."
        action={
          <Button icon="plus" onClick={onAddSale}>
            Add sale
          </Button>
        }
      />
      <div className="metrics-grid">
        <Card className="metric-card featured">
          <span className="metric-icon">
            <Icon name="wallet" />
          </span>
          <span className="metric-label">Today’s revenue</span>
          <strong>₹{revenue.toLocaleString("en-IN")}</strong>
          <span className="metric-change">
            <Icon name="trend" size={15} /> 12.5% from yesterday
          </span>
          <div className="mini-bars">
            {[35, 55, 45, 70, 62, 90, 74, 95, 82, 100].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </Card>
        <Card className="metric-card">
          <span className="metric-icon blue">
            <Icon name="box" />
          </span>
          <span className="metric-label">Orders today</span>
          <strong>{orderCount}</strong>
          <span className="metric-sub">12 via WhatsApp</span>
        </Card>
        <Card className="metric-card amber-card">
          <span className="metric-icon amber">
            <Icon name="clock" />
          </span>
          <span className="metric-label">Total pending udhaar</span>
          <strong>₹42,680</strong>
          <span className="metric-sub warn">8 payments overdue</span>
          <Button variant="amber" onClick={() => setPage("udhaar")}>
            View ledger <Icon name="arrow" size={16} />
          </Button>
        </Card>
      </div>
      <div className="alert-strip">
        <span className="alert-icon">
          <Icon name="stock" />
        </span>
        <span>
          <b>3 items are running low</b>
          <small>Fortune Oil, Tata Salt and Maggi need restocking</small>
        </span>
        <div className="stock-peek">
          <span>
            Fortune Oil <i>3 left</i>
          </span>
          <span>
            Maggi <i>8 left</i>
          </span>
        </div>
        <Button variant="secondary" onClick={() => setPage("stock")}>
          View stock
        </Button>
      </div>
      <div className="dashboard-grid">
        <Card className="activity-card">
          <div className="card-header">
            <div>
              <h2>Recent activity</h2>
              <p>Latest orders and payments</p>
            </div>
            <button className="text-button">
              View all <Icon name="arrow" size={15} />
            </button>
          </div>
          <div className="activity-list">
            {activities.map((a) => (
              <div className="activity-row" key={a.name}>
                <span className={`avatar avatar-${a.tone}`}>{a.initials}</span>
                <span className="activity-info">
                  <b>{a.name}</b>
                  <small>{a.detail}</small>
                </span>
                <span className="activity-value">
                  <b className={a.value.startsWith("+") ? "positive" : ""}>
                    {a.value}
                  </b>
                  <small>{a.time}</small>
                </span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="insight-card">
          <div className="ai-label">
            <Icon name="spark" size={17} /> WISE AI INSIGHT
          </div>
          <h2>Friday is your best sales day</h2>
          <p>
            You make 18% more sales on Fridays. Keep extra milk and snacks ready
            tomorrow.
          </p>
          <div className="insight-visual">
            <div>
              <span>Mon</span>
              <i style={{ height: "42%" }} />
            </div>
            <div>
              <span>Tue</span>
              <i style={{ height: "55%" }} />
            </div>
            <div>
              <span>Wed</span>
              <i style={{ height: "49%" }} />
            </div>
            <div>
              <span>Thu</span>
              <i style={{ height: "65%" }} />
            </div>
            <div className="best">
              <span>Fri</span>
              <i style={{ height: "92%" }} />
            </div>
            <div>
              <span>Sat</span>
              <i style={{ height: "72%" }} />
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

function WhatsAppCapture() {
  return (
    <>
      <PageHeading
        eyebrow="WHATSAPP ORDER CAPTURE"
        title="Orders, understood automatically"
        description="Wise AI turns customer messages and voice notes into clean orders."
      />
      <div className="capture-layout">
        <div className="phone">
          <div className="phone-top">
            <span className="notch" />
            <span>9:41</span>
            <span>● ● ◒</span>
          </div>
          <div className="wa-header">
            <span className="wa-back">‹</span>
            <span className="avatar avatar-blue">AM</span>
            <span>
              <b>Amit Mishra</b>
              <small>online</small>
            </span>
            <span className="wa-actions">⌕ ⋮</span>
          </div>
          <div className="chat-bg">
            <span className="date-pill">TODAY</span>
            <div className="bubble received">
              Namaste Ramesh ji, samaan bhej dena
            </div>
            <div className="bubble received">
              2 kg chawal, 1 litre tel, 5 Maggi - udhaar mein likh dena{" "}
              <small>9:36 AM</small>
            </div>
            <div className="voice-note">
              <button>
                <Icon name="mic" size={17} />
              </button>
              <div className="wave">
                {[8, 16, 11, 20, 14, 23, 9, 17, 12, 19, 8, 14, 6].map(
                  (h, i) => (
                    <i key={i} style={{ height: h }} />
                  ),
                )}
              </div>
              <span>0:12</span>
              <small>9:37 AM</small>
            </div>
            <div className="bubble sent">
              Bilkul Amit ji, order check karke confirm kar raha hoon.{" "}
              <small>9:37 AM ✓✓</small>
            </div>
          </div>
          <div className="chat-input">
            <span>＋</span>
            <div>Message</div>
            <button>
              <Icon name="mic" size={18} />
            </button>
          </div>
        </div>
        <div className="parsed-panel">
          <div className="parsed-head">
            <span className="bot-mark">
              <Icon name="spark" />
            </span>
            <span>
              <b>Order parsed by Wise AI</b>
              <small>From Amit’s message + voice note</small>
            </span>
            <Chip tone="green">98% confident</Chip>
          </div>
          <Card className="order-card">
            <div className="order-meta">
              <span>
                <small>CUSTOMER</small>
                <b>Amit Mishra</b>
              </span>
              <span>
                <small>PAYMENT</small>
                <Chip tone="amber">Added to udhaar</Chip>
              </span>
            </div>
            <div className="order-table">
              <div className="order-table-head">
                <span>ITEM</span>
                <span>QTY</span>
                <span>PRICE</span>
              </div>
              {[
                ["India Gate Rice", "2 kg", "₹140"],
                ["Fortune Mustard Oil", "1 L", "₹165"],
                ["Maggi Noodles", "5 pcs", "₹70"],
              ].map((row) => (
                <div className="order-item" key={row[0]}>
                  <span>
                    <i className="item-thumb" />
                    <b>{row[0]}</b>
                  </span>
                  <span>{row[1]}</span>
                  <strong>{row[2]}</strong>
                </div>
              ))}
            </div>
            <div className="order-total">
              <span>
                Total amount<small>3 items</small>
              </span>
              <strong>₹375</strong>
            </div>
            <div className="order-actions">
              <Button variant="secondary" icon="edit" full>
                Edit order
              </Button>
              <Button icon="check" full>
                Confirm & add
              </Button>
            </div>
          </Card>
          <div className="ai-note">
            <Icon name="spark" />
            <span>
              <b>Wise AI noticed</b>
              <p>
                Voice note says “same rice as last time”, so India Gate Dubar
                was selected from Amit’s previous order.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

const customers = [
  {
    initials: "RS",
    name: "Ravi Sharma",
    phone: "•••• 4821",
    amount: "₹8,450",
    due: "12 days overdue",
    tone: "red",
    segment: "Loyal",
  },
  {
    initials: "SK",
    name: "Sunita Kumari",
    phone: "•••• 8174",
    amount: "₹6,200",
    due: "Due in 2 days",
    tone: "amber",
    segment: "VIP",
  },
  {
    initials: "AM",
    name: "Amit Mishra",
    phone: "•••• 2659",
    amount: "₹4,850",
    due: "Due 25 Jun",
    tone: "neutral",
    segment: "Growing",
  },
  {
    initials: "PK",
    name: "Pooja Kumari",
    phone: "•••• 9032",
    amount: "₹3,240",
    due: "Due 28 Jun",
    tone: "neutral",
    segment: "New",
  },
  {
    initials: "VS",
    name: "Vikram Singh",
    phone: "•••• 1148",
    amount: "₹2,980",
    due: "5 days overdue",
    tone: "red",
    segment: "Loyal",
  },
]

function UdhaarLedger({
  onReminder,
}: {
  onReminder: (customer: string) => void
}) {
  const [selected, setSelected] = useState(customers[0])
  return (
    <>
      <PageHeading
        eyebrow="UDHAAR LEDGER"
        title="₹42,680 baaki hai"
        description="Track balances, send reminders and understand every customer."
        action={<Button icon="plus">Add udhaar</Button>}
      />
      <div className="ledger-stats">
        <span>
          <small>TOTAL CUSTOMERS</small>
          <b>24</b>
        </span>
        <span>
          <small>DUE THIS WEEK</small>
          <b>₹12,450</b>
        </span>
        <span className="danger">
          <small>OVERDUE</small>
          <b>₹15,840</b>
        </span>
        <span className="good">
          <small>RECOVERED THIS MONTH</small>
          <b>₹28,200</b>
        </span>
      </div>
      <div className="ledger-layout">
        <Card className="customer-list">
          <div className="list-tools">
            <div className="search compact">
              <Icon name="search" size={17} />
              <span>Search customer...</span>
            </div>
            <button className="filter-button">All customers⌄</button>
          </div>
          <div className="customer-head">
            <span>CUSTOMER</span>
            <span>BALANCE</span>
            <span>STATUS</span>
            <span>ACTION</span>
          </div>
          {customers.map((c) => (
            <div
              className={`customer-row ${
                selected.name === c.name ? "selected" : ""
              }`}
              key={c.name}
              onClick={() => setSelected(c)}
            >
              <span className="customer-name">
                <span className={`avatar avatar-${c.tone}`}>{c.initials}</span>
                <span>
                  <b>{c.name}</b>
                  <small>
                    {c.phone} · <i>{c.segment}</i>
                  </small>
                </span>
              </span>
              <strong>{c.amount}</strong>
              <Chip tone={c.tone as "red" | "amber" | "neutral"}>{c.due}</Chip>
              <Button
                variant="secondary"
                icon="send"
                onClick={() => onReminder(c.name)}
              >
                Remind
              </Button>
            </div>
          ))}
        </Card>
        <Card className="customer-sheet">
          <div className="sheet-profile">
            <span className={`avatar avatar-${selected.tone}`}>
              {selected.initials}
            </span>
            <span>
              <h2>{selected.name}</h2>
              <p>+91 98••• {selected.phone.slice(-4)}</p>
            </span>
            <Chip tone="green">{selected.segment}</Chip>
          </div>
          <div className="balance-box">
            <span>
              <small>TOTAL BAAKI</small>
              <strong>{selected.amount}</strong>
            </span>
            <Button icon="send" onClick={() => onReminder(selected.name)}>
              WhatsApp reminder
            </Button>
          </div>
          <div className="ai-summary">
            <div className="ai-label">
              <Icon name="spark" size={16} /> WISE AI SUMMARY
            </div>
            <p>
              Pays on time, usually after 10 days. Suggest reminder on{" "}
              <b>Friday morning.</b>
            </p>
          </div>
          <div className="tabs">
            <button className="active">History</button>
            <button>Payments</button>
          </div>
          <div className="timeline">
            <div>
              <i />
              <span>
                <b>Grocery order</b>
                <small>12 Jun · Rice, oil, sugar +2</small>
              </span>
              <strong>+ ₹2,340</strong>
            </div>
            <div className="paid">
              <i />
              <span>
                <b>UPI payment</b>
                <small>03 Jun · Payment received</small>
              </span>
              <strong>− ₹1,500</strong>
            </div>
            <div>
              <i />
              <span>
                <b>Grocery order</b>
                <small>24 May · Atta, dal, soap</small>
              </span>
              <strong>+ ₹1,120</strong>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

const inventory = [
  {
    name: "Fortune Mustard Oil",
    unit: "1 L pouch",
    price: "₹165",
    stock: 3,
    max: 24,
    status: "Critical",
    tone: "red",
  },
  {
    name: "Tata Salt",
    unit: "1 kg pack",
    price: "₹28",
    stock: 6,
    max: 30,
    status: "Low stock",
    tone: "amber",
  },
  {
    name: "Maggi Noodles",
    unit: "70 g pack",
    price: "₹14",
    stock: 8,
    max: 48,
    status: "Low stock",
    tone: "amber",
  },
  {
    name: "Aashirvaad Atta",
    unit: "5 kg pack",
    price: "₹285",
    stock: 18,
    max: 25,
    status: "In stock",
    tone: "green",
  },
  {
    name: "India Gate Rice",
    unit: "1 kg",
    price: "₹70",
    stock: 22,
    max: 30,
    status: "In stock",
    tone: "green",
  },
  {
    name: "Parle-G Biscuits",
    unit: "800 g pack",
    price: "₹85",
    stock: 34,
    max: 40,
    status: "In stock",
    tone: "green",
  },
]

function Inventory() {
  return (
    <>
      <PageHeading
        eyebrow="INVENTORY"
        title="Stock sambhaliye"
        description="Know what’s low before your customers ask for it."
        action={<Button icon="plus">Add item</Button>}
      />
      <div className="inventory-tools">
        <div className="search wide">
          <Icon name="search" size={18} />
          <span>Search 142 items...</span>
        </div>
        <div className="segment-control">
          <button className="active">
            All items <span>142</span>
          </button>
          <button>
            Low stock <span>3</span>
          </button>
          <button>
            Out of stock <span>0</span>
          </button>
        </div>
      </div>
      <div className="inventory-grid">
        {inventory.map((item, index) => (
          <Card className="inventory-card" key={item.name}>
            <div className={`product-visual product-${index + 1}`}>
              <Icon name="box" size={29} />
              <Chip tone={item.tone as "red" | "amber" | "green"}>
                {item.status}
              </Chip>
            </div>
            <div className="product-info">
              <h2>{item.name}</h2>
              <p>{item.unit}</p>
              <div className="price-row">
                <strong>{item.price}</strong>
                <span>selling price</span>
              </div>
              <div className="stock-label">
                <span>Stock level</span>
                <b>
                  {item.stock} / {item.max} left
                </b>
              </div>
              <div className="stock-bar">
                <i
                  className={`bar-${item.tone}`}
                  style={{ width: `${(item.stock / item.max) * 100}%` }}
                />
              </div>
              <Button
                variant={item.tone === "green" ? "secondary" : "primary"}
                icon="plus"
                full
              >
                {item.tone === "green" ? "Update stock" : "Quick restock"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

function CreditPassport() {
  const [consent, setConsent] = useState(false)
  return (
    <>
      <PageHeading
        eyebrow="CREDIT PASSPORT"
        title="Your business readiness"
        description="A simple view of your shop’s financial health — built from your own records."
      />
      <div className="passport-layout">
        <Card className="gauge-card">
          <div className="gauge-head">
            <span>
              <h2>Financial Readiness</h2>
              <p>Updated today from 6 months of activity</p>
            </span>
            <Chip tone="green">Strong</Chip>
          </div>
          <div className="gauge">
            <svg viewBox="0 0 220 130">
              <path d="M25 112a86 86 0 0 1 170 0" pathLength="100" />
              <path
                className="gauge-value"
                d="M25 112a86 86 0 0 1 170 0"
                pathLength="100"
              />
            </svg>
            <div>
              <strong>82</strong>
              <span>out of 100</span>
            </div>
          </div>
          <div className="readiness-note">
            <Icon name="trend" />
            <span>
              <b>Up 6 points this month</b>
              <small>Steady sales and faster udhaar recovery helped.</small>
            </span>
          </div>
          <p className="not-score">
            <Icon name="lock" size={15} /> This is a readiness indicator, not a
            credit score.
          </p>
        </Card>
        <div className="breakdown">
          <Card className="factor-card">
            <div className="factor-head">
              <span className="metric-icon">
                <Icon name="ledger" />
              </span>
              <Chip tone="green">Excellent</Chip>
            </div>
            <h2>Transaction consistency</h2>
            <strong>92%</strong>
            <p>You recorded sales on 28 of the last 30 days.</p>
            <div className="factor-bar">
              <i style={{ width: "92%" }} />
            </div>
          </Card>
          <Card className="factor-card">
            <div className="factor-head">
              <span className="metric-icon amber">
                <Icon name="wallet" />
              </span>
              <Chip tone="amber">Good</Chip>
            </div>
            <h2>Udhaar recovery rate</h2>
            <strong>76%</strong>
            <p>Most pending payments are recovered within 14 days.</p>
            <div className="factor-bar amber">
              <i style={{ width: "76%" }} />
            </div>
          </Card>
          <Card className="trend-card">
            <div>
              <h2>Monthly revenue trend</h2>
              <p>Last 6 months</p>
            </div>
            <strong>+18.4%</strong>
            <svg viewBox="0 0 360 90" preserveAspectRatio="none">
              <defs>
                <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1FA463" stopOpacity=".22" />
                  <stop offset="1" stopColor="#1FA463" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="area"
                d="M0 76 C35 66,55 73,80 55 S130 66,155 42 S205 52,230 30 S290 45,360 10 V90 H0Z"
              />
              <path
                className="line"
                d="M0 76 C35 66,55 73,80 55 S130 66,155 42 S205 52,230 30 S290 45,360 10"
              />
            </svg>
            <div className="months">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </Card>
        </div>
        <Card className="consent-card">
          <span className="consent-icon">
            <Icon name="lock" />
          </span>
          <span>
            <h2>Consent to share your business summary</h2>
            <p>
              Allow verified lenders to view this passport when you apply. We
              never share customer names or personal messages.
            </p>
            <small>
              Your data stays encrypted and you can withdraw consent anytime.
            </small>
          </span>
          <button
            className={`toggle ${consent ? "on" : ""}`}
            onClick={() => setConsent(!consent)}
            aria-label="Consent to share"
            aria-pressed={consent}
          >
            <i />
          </button>
        </Card>
      </div>
    </>
  )
}

const schemeSource = {
  query:
    "Go to myscheme.gov.in. Search for schemes for small retail shop owners / micro-enterprises in Rajasthan.",
  results: [
    {
      position: 1,
      siteName: "www.myscheme.gov.in",
      name: "myScheme",
      url: "https://www.myscheme.gov.in/",
      eligibility:
        "A national discovery platform for citizens looking for government schemes, including small retail and micro-enterprises in Rajasthan.",
      amount: "Varies by matched government scheme",
      documents: ["Not listed in the search result"],
      deadline: "Not shown",
      snippet:
        "National one-stop platform for search and discovery of Government schemes.",
    },
    {
      position: 3,
      siteName: "www.myscheme.gov.in",
      name: "Technology Acquisition Assistance",
      url: "https://www.myscheme.gov.in/schemes/taa",
      eligibility:
        "Micro and small enterprises in the state acquiring advanced technology or software related to production or operations.",
      amount: "Technology or software acquisition assistance",
      documents: ["Not listed in the search result"],
      deadline: "Not shown",
      snippet:
        "Supports micro and small enterprises in acquiring advanced technology or software.",
    },
    {
      position: 10,
      siteName: "www.myscheme.gov.in",
      name: "Stand-Up India",
      url: "https://www.myscheme.gov.in/schemes/sui",
      eligibility:
        "SC/ST and/or women entrepreneurs setting up a new greenfield enterprise.",
      amount: "Bank loan; amount not shown in the search result",
      documents: ["Not listed in the search result"],
      deadline: "Not shown",
      snippet:
        "Ministry of Finance scheme facilitating bank loans for eligible greenfield projects.",
    },
  ],
}

const schemes = schemeSource.results.map((result, index) => ({
  ...result,
  rank: index + 1,
  tag:
    index === 0 ? "OFFICIAL SOURCE" : index === 1 ? "MSE SUPPORT" : "BANK LOAN",
}))

const agentSteps = [
  {
    title: "Visited portal",
    detail: "myscheme.gov.in · Live",
  },
  {
    title: "Read eligibility rules",
    detail: "Official result reviewed",
  },
  {
    title: "Matched your profile",
    detail: "Rajasthan micro-enterprise",
  },
  { title: "Pre-filled form", detail: "Application draft is ready" },
]

function SchemeFinder() {
  const [selected, setSelected] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState(0)
  const [running, setRunning] = useState(false)
  const timestamp = new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date())

  useEffect(() => {
    if (!running) return
    if (visibleSteps >= agentSteps.length) {
      setRunning(false)
      return
    }
    const timer = window.setTimeout(
      () => setVisibleSteps((count) => count + 1),
      650,
    )
    return () => window.clearTimeout(timer)
  }, [running, visibleSteps])

  const runAgent = () => {
    setVisibleSteps(0)
    setRunning(true)
  }
  return (
    <>
      <PageHeading
        eyebrow="FUNDING & SCHEME FINDER"
        title="3 opportunities match your shop"
        description="Wise AI checks trusted portals daily, so you don’t have to."
        action={
          <div className="live-check">
            <i /> Source checked today, {timestamp}
          </div>
        }
      />
      <div className="scheme-layout">
        <div className="scheme-list">
          <div className="match-banner">
            <span className="spark-large">
              <Icon name="spark" size={27} />
            </span>
            <span>
              <b>Matched using your Credit Passport</b>
              <p>
                Results loaded from the supplied myScheme.gov.in search data.
              </p>
            </span>
            <button>
              Review profile <Icon name="chevron" size={15} />
            </button>
          </div>
          {schemes.map((s, i) => (
            <Card
              className={`scheme-card ${selected === i ? "selected" : ""}`}
              key={s.name}
            >
              <div className="scheme-rank">#{s.rank}</div>
              <div className="scheme-content">
                <div className="scheme-top">
                  <span>
                    <Chip
                      tone={i === 0 ? "green" : i === 1 ? "blue" : "neutral"}
                    >
                      {s.tag}
                    </Chip>
                    <h2>{s.name}</h2>
                    <p>{s.siteName}</p>
                  </span>
                  <div
                    className="match-ring"
                    style={{ "--match": `${(100 - i * 8) * 3.6}deg` } as React.CSSProperties}
                  >
                    <span>
                      <b>#{s.position}</b>
                      <small>source</small>
                    </span>
                  </div>
                </div>
                <p className="scheme-desc">
                  <b>Eligibility:</b> {s.eligibility}
                </p>
                <div className="scheme-meta">
                  <span>
                    <small>BENEFIT / LOAN AMOUNT</small>
                    <b>{s.amount}</b>
                  </span>
                  <span>
                    <small>DEADLINE</small>
                    <b>{s.deadline}</b>
                  </span>
                </div>
                <div className="scheme-documents">
                  <small>REQUIRED DOCUMENTS</small>
                  <b>{s.documents.join(", ")}</b>
                </div>
                <div className="verified">
                  <Icon name="check" size={15} />
                  <span>
                    <b>Verified live today by TinyFish agent</b>
                    <small>{timestamp} · {s.siteName}</small>
                  </span>
                </div>
                <div className="scheme-actions">
                  <Button variant="secondary" onClick={() => setSelected(i)}>
                    View details
                  </Button>
                  <Button icon="spark" onClick={() => setSelected(i)}>
                    Auto-fill application
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <aside className="agent-panel">
          <div className="agent-head">
            <span className="bot-mark">
              <Icon name="spark" />
            </span>
            <span>
              <b>TinyFish Agent</b>
              <small>Live application assistant</small>
            </span>
            <Chip tone="green">
              {running ? "Running" : visibleSteps === 4 ? "Complete" : "Ready"}
            </Chip>
          </div>
          <div className="agent-scheme">
            <small>PREPARING FOR</small>
            <b>{schemes[selected].name}</b>
            <span>Source result #{schemes[selected].position}</span>
          </div>
          <div className="agent-steps">
            {visibleSteps === 0 && (
              <div className="agent-idle">
                <Icon name="spark" size={18} />
                <span>
                  <b>Ready to check this scheme</b>
                  <small>Run the agent to follow each step live.</small>
                </span>
              </div>
            )}
            {agentSteps.slice(0, visibleSteps).map((step, i) => (
              <div className="agent-step agent-step-visible" key={step.title}>
                <span className="step-check">
                  <Icon name="check" size={15} />
                </span>
                <span>
                  <b>{step.title}</b>
                  <small>{step.detail}</small>
                </span>
                {i < visibleSteps - 1 && <i />}
              </div>
            ))}
          </div>
          <div className="document-box">
            <b>Documents from source</b>
            {schemes[selected].documents.map((document) => (
              <span className="needed" key={document}>
                <Icon name="clock" size={15} /> {document}
              </span>
            ))}
          </div>
          <Button full icon="spark" onClick={runAgent}>
            {running ? "Agent is running…" : "Run agent"}
          </Button>
          <p className="agent-privacy">
            <Icon name="lock" size={14} /> Nothing is submitted without your
            approval.
          </p>
        </aside>
      </div>
    </>
  )
}

function AddSaleModal({
  onClose,
  onSave,
}: {
  onClose: () => void
  onSave: (sale: { customer: string; amount: number; items: string }) => void
}) {
  const [customer, setCustomer] = useState("")
  const [amount, setAmount] = useState("")
  const [items, setItems] = useState("")

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const parsedAmount = Number(amount)
    if (!customer.trim() || !items.trim() || parsedAmount <= 0) return
    onSave({ customer: customer.trim(), amount: parsedAmount, items: items.trim() })
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="sale-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sale-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <span>
            <span className="eyebrow">QUICK ENTRY</span>
            <h2 id="sale-title">Add today’s sale</h2>
          </span>
          <button className="icon-button" onClick={onClose} aria-label="Close">
            <Icon name="close" size={18} />
          </button>
        </div>
        <form onSubmit={submit}>
          <label>
            Customer name
            <input
              autoFocus
              value={customer}
              onChange={(event) => setCustomer(event.target.value)}
              placeholder="e.g. Meena Sharma"
              required
            />
          </label>
          <label>
            Items sold
            <input
              value={items}
              onChange={(event) => setItems(event.target.value)}
              placeholder="e.g. Atta, oil, biscuits"
              required
            />
          </label>
          <label>
            Amount
            <div className="amount-input">
              <span>₹</span>
              <input
                type="number"
                min="1"
                step="1"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="0"
                required
              />
            </div>
          </label>
          <div className="modal-actions">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button icon="check" type="submit">Add sale</Button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState("home")
  const [revenue, setRevenue] = useState(18450)
  const [orderCount, setOrderCount] = useState(38)
  const [activities, setActivities] = useState(initialActivities)
  const [showSaleModal, setShowSaleModal] = useState(false)
  const [toast, setToast] = useState("")

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 3200)
  }

  const addSale = (sale: {
    customer: string
    amount: number
    items: string
  }) => {
    const initials = sale.customer
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()
    setRevenue((current) => current + sale.amount)
    setOrderCount((current) => current + 1)
    setActivities((current) => [
      {
        initials,
        name: sale.customer,
        detail: `New sale · ${sale.items}`,
        value: `₹${sale.amount.toLocaleString("en-IN")}`,
        time: "Just now",
        tone: "green",
      },
      ...current,
    ])
    setShowSaleModal(false)
    showToast(`Sale added for ${sale.customer}`)
  }

  const screens: Record<string, ReactNode> = {
    home: (
      <HomeDashboard
        revenue={revenue}
        orderCount={orderCount}
        activities={activities}
        onAddSale={() => setShowSaleModal(true)}
        setPage={setPage}
      />
    ),
    capture: <WhatsAppCapture />,
    udhaar: (
      <UdhaarLedger
        onReminder={(customer) =>
          showToast(`WhatsApp reminder sent to ${customer}`)
        }
      />
    ),
    stock: <Inventory />,
    passport: <CreditPassport />,
    schemes: <SchemeFinder />,
  }
  return (
    <>
      <AppShell page={page} setPage={setPage}>
        {screens[page]}
      </AppShell>
      {showSaleModal && <AddSaleModal onClose={() => setShowSaleModal(false)} onSave={addSale} />}
      {toast && (
        <div className="toast" role="status">
          <span><Icon name="check" size={16} /></span>
          {toast}
        </div>
      )}
    </>
  )
}

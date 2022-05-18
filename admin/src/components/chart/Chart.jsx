import './chart.scss'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'January', Total: 1200 },
  { name: 'February', Total: 2300 },
  { name: 'March', Total: 300 },
  { name: 'April', Total: 1600 },
  { name: 'May', Total: 1000 },
  { name: 'June', Total: 4600 },
  { name: 'July', Total: 3400 },
  { name: 'August', Total: 2900 },
  { name: 'September', Total: 2300 },
  { name: 'October', Total: 600 },
  { name: 'November', Total: 700 },
  { name: 'December', Total: 1600 },
]

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart

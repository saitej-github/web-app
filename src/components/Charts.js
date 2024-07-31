import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Treemap,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

// Data for charts
const data = [
  { name: 'Jan', value: 4000, uv: 2400, sales: 2400, category1: 2000, category2: 1000 },
  { name: 'Feb', value: 3000, uv: 1398, sales: 2210, category1: 1500, category2: 1200 },
  { name: 'Mar', value: 2000, uv: 9800, sales: 2290, category1: 1800, category2: 1400 },
  { name: 'Apr', value: 2780, uv: 3908, sales: 2000, category1: 2200, category2: 1600 },
  { name: 'May', value: 1890, uv: 4800, sales: 2181, category1: 2500, category2: 1700 },
  { name: 'Jun', value: 2390, uv: 3800, sales: 2500, category1: 3000, category2: 1800 },
  { name: 'Jul', value: 3490, uv: 4300, sales: 2100, category1: 3500, category2: 1900 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Charts = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Charts
      </Typography>
      <Grid container spacing={4}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Line Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        
        {/* Area Chart */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Area Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Bar Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        
        {/* Stacked Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Stacked Bar Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} stackOffset="expand">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="category1" stackId="a" fill="#8884d8" />
                <Bar dataKey="category2" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        
        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Pie Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={data.slice(0, 4)} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8" label>
                  {data.slice(0, 4).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        
        {/* Tree Map */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Tree Map
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <Treemap
                data={data}
                dataKey="value"
                ratio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
              >
                <Tooltip />
              </Treemap>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Charts;

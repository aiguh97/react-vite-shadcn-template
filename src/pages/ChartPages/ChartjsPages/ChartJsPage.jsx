import StatistikChartJS from '@/components/customs/chart/chartjs/StatistikChart'
import React from 'react'
import { Link } from 'react-router-dom'

const ChartJsPage = () => {
  return (
    <div className='p-4'>
        <Link to="https://react-chartjs-2.js.org/examples/vertical-bar-chart">Chart js Docs</Link>
      <StatistikChartJS/>
    </div>
  )
}

export default ChartJsPage

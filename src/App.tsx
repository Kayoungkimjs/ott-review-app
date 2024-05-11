import { Grid } from './components/Grid/Grid'
import ReviewRegister from './sections/ReviewRegister'
import ReviewSearch from './sections/ReviewSearch'
import ReviewList from './sections/ReviewList'
import { ResponsiveGrid } from './App.styles'

function App() {
  return (
    <Grid sm={4}>
      <ResponsiveGrid>
        <ReviewRegister />
        <div>
          <ReviewSearch />
          <ReviewList />
        </div>
      </ResponsiveGrid>
    </Grid>
  )
}

export default App

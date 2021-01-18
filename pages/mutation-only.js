import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import Submit from '../components/Submit'

const MutationOnlyPage = (props) => (
  <App>
    <Header />
    <InfoBox>
      ℹ️ That is a page only with a mutation
    </InfoBox>
    <Submit />
  </App>
)

export default MutationOnlyPage

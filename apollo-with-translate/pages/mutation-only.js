import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import Submit from '../components/Submit'
import useTranslation from 'next-translate/useTranslation'

const MutationOnlyPage = () => {
  const { t } = useTranslation('common')
  return (
    <App>
      <Header />
      <InfoBox>
        <h1>{t('titleMutation')}</h1>
        ℹ️ That is a page only with a mutation
      </InfoBox>
      <Submit />
    </App>
  )
}

export default MutationOnlyPage

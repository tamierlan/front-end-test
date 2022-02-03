export const fetchData = (apiAction) => {
  apiAction({
    url: 'https://stellardenverdan.free.beeceptor.com/boat-test/',
    onSuccess: (data) => {
      return {
        type: 'FORM',
        data
      }
    }
  })
}
export const generateInitialValues = (boatData) => {
  return {
    name: boatData.name || '',
    length: boatData.length || '',
    width: boatData.width || '',
    height: boatData.height || '',
    draft: boatData.draft || '',
    status: boatData.status
  }
}

export const handleSubmit = (values, apiAction) => {
  apiAction({
    url: 'https://stellardenverdan.free.beeceptor.com/boat-save/',
    method: 'POST',
    data: values
  })
}
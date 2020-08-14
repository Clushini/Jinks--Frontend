saveLinkToDatabase = () => {
    let link = this.state.link;
    axios.post(`http://localhost:4000/savelink`, { link })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  
  retrieveResults = (searchTerm) => {
    axios.post(`http://localhost:4000/link`, { searchTerm })
    .then(res => {
      const data = [...res.data];
      let fixedData = [];

      data.map(item => {
        let link = item.link;
        let exists = false;
        fixedData.map(fixedItem => {
          if (fixedItem.link == link) {
            exists = true;
          }
        })

        if (!exists) {
          fixedData.push(item);
        }
      })

      this.setState({
        results: fixedData
      })
    })
  }
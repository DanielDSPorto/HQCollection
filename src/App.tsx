import './App.css';
import HQContainer from './components/HQContainer';
import comicsList from './components/comicsList';
import React from 'react';
import comicList from './components/comicsList';
import { ComicStatusEnum } from './model/ComicStatusEnum';
import ComicType from './model/ComicType';

type FilterType = {
  toBuy : boolean;
  unread : boolean;
  read :  boolean;
}

const filtersDisabledObject: FilterType = {
  toBuy : false,
  unread : false,
  read :  false,
}

const filteredComicList = (comicList: ComicType[], filters : FilterType) => {
  return comicList.filter(x => (!filters.toBuy || x.status === ComicStatusEnum['A ser comprado']) && (!filters.unread || x.status === ComicStatusEnum['Não Lido']) && (!filters.read || x.status === ComicStatusEnum.Lido))
}

function App() {
  const [filters, setFilters] = React.useState<FilterType>(filtersDisabledObject)

  return (
    <div className="App">
      <header className="App-header">
        <h1>HQ Collection</h1>
        <div className='button-box'>
          <button className="button-style" onClick={()=>setFilters({...filtersDisabledObject, toBuy: !filters.toBuy})}>A ser comprado</button>
          <button className="button-style" onClick={()=>setFilters({...filtersDisabledObject, unread: !filters.unread})}>Não Lido</button>
          <button className="button-style" onClick={()=>setFilters({...filtersDisabledObject, read: !filters.read})}>Lido</button>
        </div>
      </header>
        <div className='content'>
        <HQContainer comicsList={filteredComicList(comicList, filters)} />
        </div>
    </div>
  );
}

export default App;

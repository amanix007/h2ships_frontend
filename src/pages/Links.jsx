import React from 'react'
import { GenericTables, RadioInputs, Tags } from '../components/common/CommonComponents';

const ReportFilters = [
  {
    label: "All Reports",
    value: "all"
  },
  {
    label: "Case Studies",
    value: "Case_Studies"
  },
  {
    label: "Clean Fuels",
    value: "Clean_Fuels"
  },
  {
    label: "Roadmaps",
    value: "Roadmaps"
  },
  {
    label: "Economics & Markets",
    value: "Economics_&_Markets"
  },
  {
    label: "Ship Propulsion",
    value: "Ship_Propulsion"
  }
]
const ReportFilterTags = [
  {
    label: "Research",
    value: "Research"
  },
  {
    label: "H2O",
    value: "H2O"
  },
  {
    label: "CO2",
    value: "CO2"
  },
  {
    label: "Hydrogen fuel",
    value: "Hydrogen_fuel"
  },
  {
    label: "Emission",
    value: "Emission"
  },
  {
    label: "Coastal",
    value: "Coastal"
  },
  {
    label: "Greenhouse",
    value: "Greenhouse"
  },

]
function createData(title, author, category, tag, publishDate, url) {
  return { title, author, category, tag, publishDate,url };
}

const rows = [
  createData('Feasibility of the SF-BREEZE: a Zero-Emission, Hydrogen Fuel Cell, High-Speed Passenger Ferry',
   "International Transport Forum / OECD",
    "Case study",
     "Research, fuel, H2O",
      "10, Sept 2018",
      "https://www.google.com"
      )
];
const cellTitles = [
  "Title",
  "Author",
  "Category",
  "Tag",
  "Publish date",
  "Url",
]
export default function Reports() {
  const [value, setValue] = React.useState('all');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [tag, setTag] = React.useState(null);

  const handleChangeTag = (v) => {
    setTag(v);
  };
  return (
    <section className='table-view Reports'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="filters">
              <div className="filter-block">
                <h3 className='h4 title'>Seach by filter</h3>
                <div className="filter-cont">
                  <RadioInputs
                    list={ReportFilters}
                    value={value}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="filter-block">
                <h3 className='h4 title'>Tags</h3>
                <div className="filter-cont">
                  <Tags
                    list={ReportFilters}
                    value={tag}
                    handleChange={handleChangeTag}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <GenericTables
            rows={rows}
            cellTitles={cellTitles}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

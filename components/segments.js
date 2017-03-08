import React from 'react'

export default ({segments}) => (
    <table className="collapse br2 pv2 ph3 mt4 ba b--light-gray">
        <tbody>
            <tr className="striped--near-white ba b--light-gray">
                <th className="tl f6 fw6 ttu pv2 ph3">Name</th>
                <th className="tc f6 ttu fw6 pv2 ph3">Av. Gradient</th>
                <th className="tc f6 ttu fw6 pv2 ph3">Elevation</th>
                <th className="tc f6 ttu fw6 pv2 ph3">Distance</th>
                <th className="tr f6 ttu fw6 pv2 ph3">Climb Category</th>
            </tr>
            { segments.map(segment => (
                <tr key={ segment.id } className="striped--near-white">
                    <td className="pv2 ph3">{ segment.name }</td>
                    <td className="tc pv2 ph3">{ segment.avg_grade + '%' }</td>
                    <td className="tc pv2 ph3">{ segment.elev_difference.toFixed(0) + 'm' }</td>
                    <td className="tc pv2 ph3">{ (segment.distance / 1000).toFixed(1) + 'km' }</td>
                    <td className="tc pv2 ph3">{ segment.climb_category }</td>
                </tr>
            ))}
        </tbody>
    </table>
)

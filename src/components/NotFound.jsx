import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound(){
return (
<div className="py-24 text-center">
<h2 className="text-4xl font-bold">404</h2>
<p className="mt-4 text-slate-500">The page you're looking for does not exist.</p>
<div className="mt-6">
<Link to="/" className="px-4 py-2 bg-brand text-white rounded">Back Home</Link>
</div>
</div>
)
}
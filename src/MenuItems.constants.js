import React from 'react';
import { Hyperlink } from '@edx/paragon';

export const MENU_ITEMS = [
  {
    content: "Courses",
    name: "courses",
    destination: "#",
    submenu: (
      <div className="main-menu-courses">
        <div className="d-sm-flex align-items center">
          <h2 className="mt-2 mb-4 flex-grow-1">Courses by subject</h2>
          <div><a href="#" className="btn btn-primary">All Subjects</a></div>
        </div>
        <ul className="list-unstyled mb-0">
          <li className="nav-item"><Hyperlink content="Architecture" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Art & Culture" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Biology & Life Sciences" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Business & Management" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Chemistry" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Communication" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Computer Science" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Data Analysis & Statistics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Design" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Economics & Finance" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Education & Teacher Training" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Electronics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Energy & Earth Sciences" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Engineering" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Environmental Studies" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Ethics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Food & Nutrition" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Health & Safety" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="History" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Humanities" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Language" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Law" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Literature" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Math" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Medicine" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Music" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Philanthropy" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Philosophy & Ethics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Physics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Science" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Social Sciences" destination="#" /></li>


        </ul>
      </div>
    )
  },
  {
    content: "Programs & degrees",
    name: "programs",
    destination: "#",
    submenu: (
      <div>
        <h2 className="mt-2 mb-4">Pathways for your advancement</h2>
        <dl className="mb-0">
          <dt><Hyperlink content="MicroMasters Program" destination="#" /></dt>
          <dd>Graduate-level, for career advancement or a degree path</dd>

          <dt><Hyperlink content="Professional Certificate" destination="#" /></dt>
          <dd>From employers or universities to build today's in-demand skills</dd>

          <dt><Hyperlink content="Online Master's Degree" destination="#" /></dt>
          <dd>Top-ranked programs, affordable, and fully online</dd>

          <dt><Hyperlink content="Global Freshman Academy" destination="#" /></dt>
          <dd>Freshman year courses for university credit from ASU</dd>

          <dt><Hyperlink content="XSeries" destination="#" /></dt>
          <dd className="mb-0">Series of courses for a deep understanding of a topic</dd>
        </dl>
      </div>
    )
  },
  {
    content: "Schools & partners",
    name: "schools",
    destination: "#"
  },
  {
    content: "edX for Business",
    name: "enterprise",
    destination: "#"
  }
]


export const SECONDARY_MENU_ITEMS = [
  // {
  //   content: "Sign in",
  //   triggerClassName: "btn-link",
  //   name: "sign-in",
  //   destination: "#",
  // },
  // {
  //   content: "Register",
  //   triggerClassName: "btn-primary",
  //   name: "register",
  //   destination: "#",
  // },
  {
    content: (<span>My Account</span>),
    triggerClassName: "btn-outline-secondary",
    name: "account",
    submenu: (
      <div>
      <a className="btn btn-primary btn-block mt-2 mb-3" href="#">Resume my last course</a>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link" href="#">My Dashboard</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Courses</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Programs</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Account Settings</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Sign Out</a></li>
      </ul>
      </div>
    )
  },
]

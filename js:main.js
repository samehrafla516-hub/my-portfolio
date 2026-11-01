{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // js/main.js\
\
// \uc0\u1578 \u1601 \u1593 \u1610 \u1604  \u1575 \u1604 \u1575 \u1606 \u1610 \u1605 \u1610 \u1588 \u1606  \u1593 \u1606 \u1583  \u1575 \u1604 \u1590 \u1594 \u1591  \u1593 \u1604 \u1609  \u1575 \u1604 \u1578 \u1601 \u1575 \u1589 \u1610 \u1604  (FAQ)\
document.addEventListener('DOMContentLoaded', function() \{\
    const details = document.querySelectorAll('details');\
    details.forEach(detail => \{\
        detail.querySelector('summary').addEventListener('click', function() \{\
            const isOpen = this.parentElement.getAttribute('open') === 'open';\
            this.style.color = isOpen ? '#6366f1' : 'inherit';\
        \});\
    \});\
\});\
\
// \uc0\u1587 \u1605 \u1608 \u1604  \u1587 \u1603 \u1608 \u1604  (Smooth Scroll) \u1593 \u1606 \u1583  \u1575 \u1604 \u1590 \u1594 \u1591  \u1593 \u1604 \u1609  \u1575 \u1604 \u1602 \u1575 \u1574 \u1605 \u1577 \
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener('click', function (e) \{\
        e.preventDefault();\
        const targetId = this.getAttribute('href');\
        const targetSection = document.querySelector(targetId);\
        \
        if (targetSection) \{\
            window.scrollTo(\{\
                top: targetSection.offsetTop - 80, // \uc0\u1575 \u1604 \u1591 \u1608 \u1604  \u1604 \u1578 \u1594 \u1591 \u1610 \u1577  \u1575 \u1604 \u1600  header\
                behavior: 'smooth'\
            \});\
        \}\
    \});\
\});\
}
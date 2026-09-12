from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

name = 'Gbengaayo Olawale Emmanuel'
job_title = 'Website Developer / Graphic Designer'
phone = '+234 808 8699 7023'
email = 'gbengaayoolawale@gmail.com'
website = 'www.iam-walex.netlify.app'
address = 'Kuje, Abuja, FCT, Nigeria'


def set_cell_shading(cell, fill):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = tc_pr.find(qn('w:shd'))
    if shd is None:
        shd = OxmlElement('w:shd')
        tc_pr.append(shd)
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), fill)


def set_cell_border(cell, side, color='B6B6B6', width=8):
    tc_pr = cell._tc.get_or_add_tcPr()
    borders = tc_pr.find(qn('w:tcBorders'))
    if borders is None:
        borders = OxmlElement('w:tcBorders')
        tc_pr.append(borders)
    side_el = borders.find(qn(f'w:{side}'))
    if side_el is None:
        side_el = OxmlElement(f'w:{side}')
        borders.append(side_el)
    side_el.set(qn('w:val'), 'single')
    side_el.set(qn('w:sz'), str(width))
    side_el.set(qn('w:space'), '0')
    side_el.set(qn('w:color'), color)


def set_paragraph_shading(paragraph, fill):
    ppr = paragraph._p.get_or_add_pPr()
    shd = ppr.find(qn('w:shd'))
    if shd is None:
        shd = OxmlElement('w:shd')
        ppr.append(shd)
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), fill)


def add_sidebar_heading(paragraph, title):
    run = paragraph.add_run(title)
    run.bold = True
    run.font.size = Pt(10)
    run.font.name = 'Calibri'
    run.font.color.rgb = RGBColor(18, 18, 18)
    run.underline = True


def add_contact_line(paragraph, label, value, icon):
    p = paragraph
    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p.add_run(f'{value}  {icon}')
    p.runs[0].font.size = Pt(8.5)
    p.runs[0].font.name = 'Calibri'
    p.runs[0].font.color.rgb = RGBColor(38, 38, 38)
    p.runs[1].font.size = Pt(8.5)
    p.runs[1].font.name = 'Calibri'
    p.runs[1].font.color.rgb = RGBColor(75, 75, 75)


def add_timeline_item(par, degree, year, school):
    table = par.add_table(rows=1, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.RIGHT
    table.style = 'Table Grid'
    table.rows[0].cells[0].text = ''
    table.rows[0].cells[0].width = Inches(0.18)
    table.rows[0].cells[1].text = year
    table.rows[0].cells[2].text = degree
    table.rows[0].cells[1].width = Inches(0.9)
    table.rows[0].cells[2].width = Inches(2.2)
    table.rows[0].cells[0].paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
    table.rows[0].cells[0].paragraphs[0].add_run('│')
    table.rows[0].cells[0].paragraphs[0].runs[0].font.size = Pt(11)
    table.rows[0].cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(120, 120, 120)
    table.rows[0].cells[1].paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.RIGHT
    table.rows[0].cells[1].paragraphs[0].runs[0].font.size = Pt(8)
    table.rows[0].cells[1].paragraphs[0].runs[0].font.color.rgb = RGBColor(80, 80, 80)
    table.rows[0].cells[2].paragraphs[0].runs[0].font.size = Pt(8.5)
    table.rows[0].cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(30, 30, 30)
    table.rows[0].cells[2].paragraphs[0].runs[0].font.name = 'Calibri'
    table.rows[0].cells[1].paragraphs[0].runs[0].font.name = 'Calibri'
    table.rows[0].cells[0].paragraphs[0].runs[0].font.name = 'Calibri'
    table.rows[0].cells[0].text = '│'
    table.rows[0].cells[0].paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
    table.rows[0].cells[0].paragraphs[0].runs[0].font.size = Pt(18)
    table.rows[0].cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(120, 120, 120)
    table.rows[0].cells[2].text = degree + '\n' + school
    table.rows[0].cells[2].paragraphs[0].runs[0].font.size = Pt(8.5)
    table.rows[0].cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(30, 30, 30)
    table.rows[0].cells[2].paragraphs[0].runs[0].font.name = 'Calibri'
    table.rows[0].cells[2].paragraphs[0].paragraph_format.space_after = Pt(0)


resume = Document()
section = resume.sections[0]
section.top_margin = Inches(0.5)
section.bottom_margin = Inches(0.5)
section.left_margin = Inches(0.55)
section.right_margin = Inches(0.55)
section.page_width = Inches(8.27)
section.page_height = Inches(11.69)

outer = resume.add_table(rows=1, cols=2)
outer.alignment = WD_TABLE_ALIGNMENT.CENTER
outer.columns[0].width = Inches(2.5)
outer.columns[1].width = Inches(5.8)
outer.rows[0].cells[0].width = Inches(2.5)
outer.rows[0].cells[1].width = Inches(5.8)
set_cell_border(outer.rows[0].cells[0], 'right', 'B5B5B5', 10)

left = outer.rows[0].cells[0]
right = outer.rows[0].cells[1]

# Profile photo
photo_paragraph = left.add_paragraph()
photo_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
try:
    photo_paragraph.add_run().add_picture('dist/myownimage.png', width=Inches(1.7), height=Inches(2.3))
except FileNotFoundError:
    photo_paragraph.add_run('PHOTO')
    photo_paragraph.runs[0].font.size = Pt(12)
    photo_paragraph.runs[0].font.bold = True

left.add_paragraph()
contact_heading = left.add_paragraph()
add_sidebar_heading(contact_heading, 'CONTACT')

contact_entries = [
    (phone, '☎'),
    (website, '◆'),
    (address, '⌂'),
    (email, '✉'),
]
for value, icon in contact_entries:
    para = left.add_paragraph()
    para.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    para.add_run(f'{value}  {icon}')
    for run in para.runs:
        run.font.size = Pt(8.2)
        run.font.name = 'Calibri'
        run.font.color.rgb = RGBColor(35, 35, 35)

left.add_paragraph()
education_heading = left.add_paragraph()
add_sidebar_heading(education_heading, 'EDUCATION')

edu_items = [
    ('Great Treasured Children Academy', 'Secondary Education', '2010 - 2015'),
    ('Technical School, Kuje, Abuja', 'Technical Education', '2016 - 2018'),
    ('Paul University Awka', 'Graduate by 2027', '2023 - 2027'),
]
for school, degree, year in edu_items:
    edu_paragraph = left.add_paragraph()
    edu_paragraph.alignment = WD_ALIGN_PARAGRAPH.LEFT
    run_school = edu_paragraph.add_run(f'{school}\n')
    run_school.font.size = Pt(8.5)
    run_school.font.name = 'Calibri'
    run_school.font.color.rgb = RGBColor(28, 28, 28)
    run_degree = edu_paragraph.add_run(f'{degree}')
    run_degree.font.size = Pt(7.8)
    run_degree.font.name = 'Calibri'
    run_degree.font.color.rgb = RGBColor(80, 80, 80)
    year_line = left.add_paragraph()
    year_line.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    run_year = year_line.add_run(year)
    run_year.font.size = Pt(8)
    run_year.font.name = 'Calibri'
    run_year.font.color.rgb = RGBColor(95, 95, 95)
    left.add_paragraph('')

left.add_paragraph()
reference_heading = left.add_paragraph()
add_sidebar_heading(reference_heading, 'REFERENCE')
ref_name = left.add_paragraph()
ref_name.alignment = WD_ALIGN_PARAGRAPH.RIGHT
ref_name_run = ref_name.add_run('MICHAEL BROWN')
ref_name_run.font.bold = True
ref_name_run.font.size = Pt(8.7)
ref_name_run.font.name = 'Calibri'
ref_name_run.font.color.rgb = RGBColor(22, 22, 22)

ref_title = left.add_paragraph()
ref_title.alignment = WD_ALIGN_PARAGRAPH.RIGHT
ref_title_run = ref_title.add_run('Senior Product Designer / Studio West')
ref_title_run.font.size = Pt(8.2)
ref_title_run.font.name = 'Calibri'
ref_title_run.font.color.rgb = RGBColor(52, 52, 52)

ref_address = left.add_paragraph()
ref_address.alignment = WD_ALIGN_PARAGRAPH.RIGHT
ref_address_run = ref_address.add_run('24 Palm Avenue, Lekki, Lagos, Nigeria')
ref_address_run.font.size = Pt(8.2)
ref_address_run.font.name = 'Calibri'
ref_address_run.font.color.rgb = RGBColor(52, 52, 52)

# Right main column
right_paragraph = right.add_paragraph()
set_paragraph_shading(right_paragraph, 'F0F0F0')
right_paragraph.paragraph_format.space_before = Pt(8)
right_paragraph.paragraph_format.space_after = Pt(6)
name_run = right_paragraph.add_run(name)
name_run.font.size = Pt(25)
name_run.bold = True
name_run.font.name = 'Calibri'
name_run.font.color.rgb = RGBColor(16, 16, 16)

job_para = right.add_paragraph()
job_run = job_para.add_run(job_title)
job_run.font.size = Pt(11)
job_run.font.name = 'Calibri'
job_run.font.color.rgb = RGBColor(68, 68, 68)
job_run.italic = True

line_para = right.add_paragraph()
line_run = line_para.add_run('________________________________________________')
line_run.font.size = Pt(8)
line_run.font.color.rgb = RGBColor(180, 180, 180)
line_run.font.name = 'Calibri'

about_heading = right.add_paragraph()
about_run = about_heading.add_run('ABOUT ME')
about_run.bold = True
about_run.font.size = Pt(10)
about_run.font.name = 'Calibri'
about_run.font.color.rgb = RGBColor(18, 18, 18)

about_text = right.add_paragraph()
about_text.alignment = WD_ALIGN_PARAGRAPH.LEFT
about_text_run = about_text.add_run('I am a self-taught website developer and graphic designer who enjoys turning ideas into practical digital products. I build clean, responsive websites and engaging visual experiences while combining technical skills in web development, UI/UX thinking, and creative design. My work spans frontend and backend development, community-building initiatives, and event media production, with a strong focus on clarity, usability, and visual impact.')
about_text_run.font.size = Pt(9.5)
about_text_run.font.name = 'Calibri'
about_text_run.font.color.rgb = RGBColor(40, 40, 40)

work_heading = right.add_paragraph()
work_run = work_heading.add_run('WORK EXPERIENCE')
work_run.bold = True
work_run.font.size = Pt(10)
work_run.font.name = 'Calibri'
work_run.font.color.rgb = RGBColor(18, 18, 18)

experience_items = [
    {
        'role': 'WEB DEVELOPER / GRAPHIC DESIGNER',
        'company': 'WALEX Studio',
        'location': 'Abuja, Nigeria',
        'period': '2024 — Present',
        'desc': ['Designed and developed portfolio and client-facing products with clean UI and responsive layouts.', 'Built full-stack web experiences using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.', 'Created visual assets, promotional designs, and event graphics aligned with project goals.']
    },
    {
        'role': 'FOUNDER & FACILITATOR',
        'company': 'Upgrade Lab',
        'location': 'Abuja, Nigeria',
        'period': '2026 — Present',
        'desc': ['Facilitated weekly tech learning sessions covering web development, design, and practical digital skills.', 'Supported aspiring tech professionals through mentorship, collaboration, and community engagement.', 'Created a hands-on environment for learning, idea-sharing, and collaborative growth.']
    },
    {
        'role': 'CO-FOUNDER / BACKEND ENGINEER',
        'company': 'Avio',
        'location': 'Remote',
        'period': '2025 — Present',
        'desc': ['Contributed to product architecture, API design, and backend systems for a smart wallet platform.', 'Worked with database structures and integrations for automated transactions and user flows.', 'Supported the development of a practical, user-friendly experience for digital financial tools.']
    }
]

for item in experience_items:
    role_para = right.add_paragraph()
    role_para.alignment = WD_ALIGN_PARAGRAPH.LEFT
    role_run = role_para.add_run(f"{item['role']} ")
    role_run.bold = True
    role_run.font.size = Pt(10)
    role_run.font.name = 'Calibri'
    role_run.font.color.rgb = RGBColor(18, 18, 18)
    date_run = role_para.add_run(f'• {item["period"]}')
    date_run.font.size = Pt(8)
    date_run.font.name = 'Calibri'
    date_run.font.color.rgb = RGBColor(110, 110, 110)

    meta_para = right.add_paragraph()
    meta_para.alignment = WD_ALIGN_PARAGRAPH.LEFT
    meta = meta_para.add_run(f'{item["company"]} • {item["location"]}')
    meta.font.size = Pt(8.5)
    meta.font.name = 'Calibri'
    meta.font.color.rgb = RGBColor(80, 80, 80)

    for bullet in item['desc']:
        bullet_para = right.add_paragraph()
        bullet_para.alignment = WD_ALIGN_PARAGRAPH.LEFT
        bullet_run = bullet_para.add_run('• ')
        bullet_run.font.size = Pt(8.5)
        bullet_run.font.name = 'Calibri'
        bullet_run.font.color.rgb = RGBColor(40, 40, 40)
        desc_run = bullet_para.add_run(bullet)
        desc_run.font.size = Pt(8.5)
        desc_run.font.name = 'Calibri'
        desc_run.font.color.rgb = RGBColor(40, 40, 40)

# Save file
resume.save('Gbengaayo_Olawale_Resume.docx')
print('Resume regenerated in the portfolio-inspired layout: Gbengaayo_Olawale_Resume.docx')

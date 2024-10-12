import React, { useState, CSSProperties, useEffect } from 'react';
import clsx from 'clsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

type ButtonProps = {
    size?: 'sm' | 'lg' | 'small' | 'medium' | 'large' | null;
    outline?: boolean;
    variant: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'link' | string;
    block?: boolean;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    link: string;
    label: string;
    data: any
};

const Button: React.FC<ButtonProps> = ({
    size = null,
    outline = false,
    variant = 'primary',
    block = false,
    disabled = false,
    className,
    style,
    link,
    label,
    data
}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(data)

    const sizeMap = {
        sm: 'sm',
        small: 'sm',
        lg: 'lg',
        large: 'lg',
        medium: null,
    };
    const buttonSize = size ? sizeMap[size] : '';
    const sizeClass = buttonSize ? `button--${buttonSize}` : '';
    const outlineClass = outline ? 'button--outline' : '';
    const variantClass = variant ? `button--${variant}` : '';
    const blockClass = block ? 'button--block' : '';
    const disabledClass = disabled ? 'disabled' : '';
    const destination = disabled ? null : link;

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const addFooters = doc => {
        const pageCount = doc.internal.getNumberOfPages()

        doc.setFont('helvetica', 'italic')
        doc.setFontSize(8)
        for (var i = 1; i <= pageCount; i++) {
            doc.setPage(i)
            doc.text('Page ' + String(i) + ' of ' + String(pageCount), doc.internal.pageSize.width / 2, 287, {
                align: 'center'
            })
        }
    }

    const handleExport = (format: string, data) => {
        const section = data;
        const getCellContent = (cell: any) => {
            const select = cell.querySelector('select');
            const textarea = cell.querySelector('textarea');
            if (select) {
                return select.options[select.selectedIndex].text;
            } else if (textarea) {
                return textarea.value;
            }
            return cell.innerText;
        };

        if (format === 'pdf') {
            const pdf = new jsPDF();
            const pageHeight = pdf.internal.pageSize.height;
            const pageWidth = pdf.internal.pageSize.width;
            let finalY = 20; // Start position for content on each page

            pdf.setProperties({
                title: "PROJECT CHECKLIST"
            });

            const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOK1kvHKXEEky1jyx4DoLoN9UI9X5v2xUKQ&s';
            pdf.addImage(logoUrl, 'PNG', 15, 8, 30, 15);

            pdf.setFontSize(18);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(37, 52, 127);
            pdf.text('PROJECT CHECKLIST', pageWidth / 2, finalY, { align: 'center' });
            finalY += 20;

            section.forEach((section, index) => {
                if (index !== 0) {
                    // Add a new page for every new section
                    pdf.addPage();
                    finalY = 20; // Reset the starting position for the new page
                }

                if (typeof section.heading === 'string') {
                    pdf.setFontSize(15);
                    pdf.setFont('helvetica', 'bold');
                    pdf.setTextColor(48, 68, 165);
                    pdf.text(section.heading, 10, finalY);
                    finalY += 10;
                } else {
                    console.error('Section heading is not a string:', section.heading);
                }

                section.tables.forEach((table) => {
                    const tableId = table.id;
                    const tableName = table.name;
                    const tableElement = document.getElementById(tableId);

                    if (tableElement instanceof HTMLTableElement) {
                        const rowCount = tableElement.rows.length;
                        const estimatedTableHeight = rowCount * 10; // Approximate row height
                        const headingHeight = 15; // Estimated height for heading and table name
                        const totalHeightNeeded = headingHeight + estimatedTableHeight; // Total height needed

                        // Check if both heading and table can fit on the current page
                        if (finalY + totalHeightNeeded > pageHeight) {
                            pdf.addPage(); // Add a new page if needed
                            finalY = 20; // Reset finalY for the new page
                        }

                        // Print the table name (heading)
                        if (typeof tableName === 'string') {
                            pdf.setFontSize(14);
                            pdf.setTextColor(0, 0, 0);
                            pdf.text(tableName, 10, finalY);
                            finalY += 5;
                        } else {
                            console.error('Table name is not a string:', tableName);
                        }

                        autoTable(pdf, {
                            html: `#${tableId}`,
                            startY: finalY,
                            tableWidth: pdf.internal.pageSize.getWidth() - 20,
                            margin: { right: 10, bottom: 10, left: 10 },
                            theme: 'striped',
                            didParseCell: function (data) {
                                const cell = data.cell.raw;
                                const cellContent = getCellContent(cell);
                                data.cell.text = cellContent;
                            },
                            columnStyles: {
                                0: { cellWidth: 100 },
                                1: { cellWidth: 40 },
                                2: { cellWidth: 50 },
                            },
                            didDrawCell: function (data) {
                                finalY = Math.max(finalY, data.cell.y + data.cell.height); // Update finalY with the height of the table
                            },
                        });

                        finalY += 10; // Add padding after the table
                    } else {
                        console.error(`Table with ID ${tableId} is not an HTMLTableElement or not found.`);
                    }
                });
            });

            addFooters(pdf);
            pdf.save('project-checklist.pdf');
            const pdfOutput = pdf.output('blob');
            const pdfUrl = URL.createObjectURL(pdfOutput);
            window.open(pdfUrl, '_blank');
        }
        else if (format === 'csv') {
            const rows: string[] = [];

            section.forEach((section) => {
                if (section.heading) {
                    rows.push(`\n${section.heading}`);
                }

                section.tables.forEach((table) => {
                    const tableId = table.id;
                    const tableName = table.name;
                    const tableElement = document.getElementById(tableId) as HTMLElement;

                    if (tableElement) {
                        rows.push(`\n${tableName}`);

                        const headerCells = tableElement.querySelectorAll('thead th');
                        const header = Array.from(headerCells).map(th => th.textContent || '').join(',');
                        rows.push(header);

                        const bodyRows = tableElement.querySelectorAll('tbody tr');
                        bodyRows.forEach(row => {
                            const cells = Array.from(row.querySelectorAll('td')).map(cell => {
                                const cellContent = getCellContent(cell);
                                return `"${cellContent.replace(/"/g, '""')}"`;
                            });
                            rows.push(cells.join(','));
                        });
                    } else {
                        console.error(`Table with ID ${tableId} not found.`);
                    }
                });
            });

            const csvContent = "data:text/csv;charset=utf-8," + rows.join('\n');
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'project-checklist.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        // <div className="button-container">
        //     <button
        //         className={clsx(
        //             'export-button',
        //             sizeClass,
        //             outlineClass,
        //             variantClass,
        //             blockClass,
        //             disabledClass,
        //             className
        //         )}
        //         style={style}
        //         role='button'
        //         aria-disabled={disabled}
        //         onClick={handleToggleMenu}
        //     >
        //         {label} <span className="arrow">&#9660;</span>
        //     </button>
        //     {isOpen && (
        //         <div className="button-dropdown-menu">
        //             <button className='export-button' onClick={() => handleExport('pdf')}>Export as PDF</button>
        //             <button className='export-button' onClick={() => handleExport('csv')}>Export as CSV</button>
        //         </div>
        //     )}
        // </div>
        <div className="bodyClass">
            <div className="container-button">
                <button className="btn">
                    <span>Download</span>
                    <i className="material-icons"><svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="
                            http://www.w3.org/2000/svg">
                        <path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M14 20L24 30M24 30L34 20M24 30V6" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></i>
                    <ul className="dropdown">
                        <li className="dropdown-tag">
                            <a className="a-tag" onClick={() => handleExport('pdf', data)}>Download as PDF</a>
                        </li>
                        <li className="dropdown-tag">
                            <a className="a-tag" onClick={() => handleExport('csv', data)}>Download as CSV</a>
                        </li>
                    </ul>
                </button>
            </div>
        </div>
    );
};

export default Button;

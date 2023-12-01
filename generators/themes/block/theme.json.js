export const getThemeJSON = ({ supportComments, supportPostMeta }) => `{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {
		"appearanceTools": true,
		"color": {
			"palette": [
				{
					"color": "hsl(0deg 0% 100%)",
					"name": "Base",
					"slug": "base"
				},
				{
					"color": "hsl(0deg 0% 0%)",
					"name": "Contrast",
					"slug": "contrast"
				},
				{
					"color": "hsl(207deg 85% 38%)",
					"name": "Primary",
					"slug": "primary"
				},
				{
					"color": "hsl(265deg 57% 34%)",
					"name": "Secondary",
					"slug": "secondary"
				},
				{
					"color": "hsl(324deg 99% 62%)",
					"name": "Tertiary",
					"slug": "tertiary"
				}
			]
		},
		"layout": {
			"contentSize": "50rem",
			"wideSize": "75rem"
		},
		"spacing": {
			"spacingScale": {
				"steps": 0
			},
			"spacingSizes": [
				{
					"size": "8px",
					"slug": "10",
					"name": "1"
				},
				{
					"size": "12px",
					"slug": "20",
					"name": "2"
				},
				{
					"size": "16px",
					"slug": "30",
					"name": "3"
				},
				{
					"size": "24px",
					"slug": "40",
					"name": "4"
				},
				{
					"size": "36px",
					"slug": "50",
					"name": "5"
				},
				{
					"size": "54px",
					"slug": "60",
					"name": "6"
				}
			],
			"units": [
				"%",
				"px",
				"em",
				"rem",
				"vh",
				"vw"
			]
		},
		"typography": {
			"dropCap": false,
			"fluid": true,
			"fontFamilies": [
				{
					"fontFamily": "-apple-system,BlinkMacSystemFont,\\"Segoe UI\\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\\"Helvetica Neue\\",sans-serif",
					"name": "System Font",
					"slug": "system-font"
				}
			],
			"fontSizes": [
				{
					"fluid": {
						"min": "0.75rem",
						"max": "1rem"
					},
					"size": "1rem",
					"slug": "small"
				},
				{
					"fluid": {
						"min": "1rem",
						"max": "1.313rem"
					},
					"size": "1.313rem",
					"slug": "medium"
				},
				{
					"fluid": {
						"min": "1.313rem",
						"max": "1.75rem"
					},
					"size": "1.75rem",
					"slug": "large"
				},
				{
					"fluid": {
						"min": "1.75rem",
						"max": "2.375rem"
					},
					"size": "2.375rem",
					"slug": "x-large"
				},
				{
					"fluid": {
						"min": "2.375rem",
						"max": "3.186rem"
					},
					"size": "3.186rem",
					"slug": "xx-large"
				},
				{
					"fluid": {
						"min": "3.186rem",
						"max": "4.188rem"
					},
					"size": "4.188rem",
					"slug": "xxx-large"
				}
			]
		},
		"useRootPaddingAwareAlignments": true
	},
	"styles": {
		"css": ".clearfix{clear:both}.wp-site-blocks{box-sizing:border-box;min-height:calc(100vh - var(--wp-admin--admin-bar--height, 0px))}footer.wp-block-template-part{position:sticky;top:100%}",
		"blocks": {
			"core/navigation": {
				"elements": {
					"link": {
						":hover": {
							"typography": {
								"textDecoration": "underline"
							}
						},
						":focus": {
							"typography": {
								"textDecoration": "underline dashed"
							}
						},
						":active": {
							"typography": {
								"textDecoration": "none"
							}
						},
						"typography": {
							"textDecoration": "none"
						}
					}
				},
				"typography": {
					"fontSize": "var(--wp--preset--font-size--small)"
				}
			},
			"core/post-author": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--small)"
				}
			},
			"core/post-content": {
				"elements": {
					"link": {
						"color": {
							"text": "var(--wp--preset--color--primary)"
						}
					}
				}
			},
			"core/post-excerpt": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--medium)"
				}
			},
			"core/post-date": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--small)",
					"fontWeight": "400"
				},
				"elements": {
					"link": {
						"typography": {
							"textDecoration": "none"
						},
						":hover": {
							"typography": {
								"textDecoration": "underline"
							}
						}
					}
				}
			},
			"core/post-terms": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--small)"
				}
			},
			"core/post-title": {
				"spacing": {
					"margin": {
						"bottom": "1.25rem",
						"top": "1.25rem"
					}
				},
				"typography": {
					"fontWeight": "400"
				},
				"elements": {
					"link": {
						":hover": {
							"typography": {
								"textDecoration": "underline"
							}
						},
						":focus": {
							"typography": {
								"textDecoration": "underline dashed"
							}
						},
						":active": {
							"color": {
								"text": "var(--wp--preset--color--secondary)"
							},
							"typography": {
								"textDecoration": "none"
							}
						},
						"typography": {
							"textDecoration": "none"
						}
					}
				}
			},
			"core/button": {
				"color": {
					"background": "var(--wp--preset--color--primary)",
					"text": "var(--wp--preset--color--base)"
				}
			},
			"core/comments-title": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--large)"
				},
				"spacing": {
					"margin": {
						"bottom": "var(--wp--preset--spacing--40)"
					}
				}
			},
			"core/comment-author-name": {
				"elements": {
					"link": {
						":hover": {
							"typography": {
								"textDecoration": "underline"
							}
						},
						":focus": {
							"typography": {
								"textDecoration": "underline dashed"
							}
						},
						":active": {
							"color": {
								"text": "var(--wp--preset--color--secondary)"
							},
							"typography": {
								"textDecoration": "none"
							}
						},
						"typography": {
							"textDecoration": "none"
						}
					}
				}
			},
			"core/comment-date": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--small)"
				},
				"elements": {
					"link": {
						":hover": {
							"typography": {
								"textDecoration": "underline"
							}
						},
						":focus": {
							"typography": {
								"textDecoration": "underline dashed"
							}
						},
						":active": {
							"color": {
								"text": "var(--wp--preset--color--secondary)"
							},
							"typography": {
								"textDecoration": "none"
							}
						},
						"typography": {
							"textDecoration": "none"
						}
					}
				}
			},
			"core/comment-edit-link": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--small)"
				}
			},
			"core/comment-reply-link": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--small)"
				}
			},
			"core/comments-pagination": {
				"spacing": {
					"margin": {
						"top": "var(--wp--preset--spacing--40)"
					}
				},
				"elements": {
					"link": {
						"typography": {
							"textDecoration": "none"
						}
					}
				}
			},
			"core/pullquote": {
				"border": {
					"style": "solid",
					"width": "1px 0"
				},
				"elements": {
					"cite": {
						"typography": {
							"fontSize": "var(--wp--preset--font-size--small)",
							"fontStyle": "normal",
							"textTransform": "none"
						}
					}
				},
				"typography": {
					"lineHeight": "calc(1em + 0.5rem)"
				},
				"spacing": {
					"margin": {
						"bottom": "var(--wp--preset--spacing--40) !important",
						"top": "var(--wp--preset--spacing--40) !important"
					}
				}
			},
			"core/query": {
				"elements": {
					"h2": {
						"typography": {
							"fontSize": "var(--wp--preset--font-size--x-large)"
						}
					}
				}
			},
			"core/query-pagination": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--small)",
					"fontWeight": "400"
				},
				"elements": {
					"link": {
						"typography": {
							"textDecoration": "none"
						},
						":hover": {
							"typography": {
								"textDecoration": "underline"
							}
						}
					}
				}
			},
			"core/quote": {
				"border": {
					"left": {
						"color": "inherit",
						"style": "solid",
						"width": "1px"
					}
				},
				"elements": {
					"cite": {
						"typography": {
							"fontSize": "var(--wp--preset--font-size--small)",
							"fontStyle": "normal"
						}
					}
				},
				"spacing": {
					"padding": {
						"left": "var(--wp--preset--spacing--30)",
						"right": "var(--wp--preset--spacing--30)"
					}
				}
			},
			"core/site-title": {
				"elements": {
					"link": {
						":hover": {
							"typography": {
								"textDecoration": "underline"
							}
						},
						":focus": {
							"typography": {
								"textDecoration": "underline dashed"
							}
						},
						":active": {
							"color": {
								"text": "var(--wp--preset--color--secondary)"
							},
							"typography": {
								"textDecoration": "none"
							}
						},
						"typography": {
							"textDecoration": "none"
						}
					}
				},
				"typography": {
					"fontSize": "var(--wp--preset--font-size--medium)",
					"fontWeight": "normal",
					"lineHeight": "calc(1em + 0.5rem)"
				}
			},
			"core/separator": {
				"css": " &:not(.is-style-wide):not(.is-style-dots):not(.alignwide):not(.alignfull){width: 100px}"
			}
		},
		"color": {
			"background": "var(--wp--preset--color--base)",
			"text": "var(--wp--preset--color--contrast)"
		},
		"elements": {
			"button": {
				"border": {
					"radius": "0"
				},
				"color": {
					"background": "var(--wp--preset--color--primary)",
					"text": "var(--wp--preset--color--base)"
				},
				":hover": {
					"color": {
						"background": "var(--wp--preset--color--secondary)",
						"text": "var(--wp--preset--color--base)"
					}
				},
				":focus": {
					"color": {
						"background": "var(--wp--preset--color--secondary)",
						"text": "var(--wp--preset--color--base)"
					}
				},
				":active": {
					"color": {
						"background": "var(--wp--preset--color--secondary)",
						"text": "var(--wp--preset--color--base)"
					}
				},
				":visited": {
					"color": {
						"text": "var(--wp--preset--color--secondary)"
					}
				}
			},
			"h1": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--xxx-large)",
					"lineHeight": "calc(1em + 0.5em)"
				}
			},
			"h2": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--xx-large)",
					"lineHeight": "calc(1em + 0.5em)"
				}
			},
			"h3": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--x-large)",
					"lineHeight": "calc(1em + 0.5em)"
				}
			},
			"h4": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--large)",
					"lineHeight": "calc(1em + 0.5em)"
				}
			},
			"h5": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--medium)",
					"fontWeight": "700",
					"textTransform": "uppercase"
				}
			},
			"h6": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--medium)",
					"textTransform": "uppercase"
				}
			},
			"heading": {
				"typography": {
					"fontWeight": "400",
					"lineHeight": "calc(1em + 0.5rem)"
				}
			},
			"link": {
				"color": {
					"text": "var(--wp--preset--color--contrast)"
				},
				":hover": {
					"typography": {
						"textDecoration": "none"
					}
				},
				":focus": {
					"typography": {
						"textDecoration": "underline dashed"
					}
				},
				":active": {
					"color": {
						"text": "var(--wp--preset--color--secondary)"
					},
					"typography": {
						"textDecoration": "none"
					}
				},
				"typography": {
					"textDecoration": "underline"
				}
			}
		},
		"spacing": {
			"blockGap": "var(--wp--preset--spacing--40)",
			"padding": {
				"top": "var(--wp--preset--spacing--40)",
				"right": "var(--wp--preset--spacing--30)",
				"bottom": "var(--wp--preset--spacing--40)",
				"left": "var(--wp--preset--spacing--30)"
			}
		},
		"typography": {
			"fontFamily": "var(--wp--preset--font-family--system-font)",
			"fontSize": "var(--wp--preset--font-size--medium)",
			"lineHeight": "calc(1em + 0.5em)"
		}
	},
	"templateParts": [
		{
			"area": "header",
			"name": "header",
			"title": "Header"
		},
		{
			"area": "footer",
			"name": "footer",
			"title": "Footer"
		}${
			supportComments
				? `,
		{
			"area": "uncategorized",
			"name": "comments",
			"title": "Comments"
		}`
				: ''
		}${
			supportPostMeta
				? `,
		{
			"area": "uncategorized",
			"name": "post-meta",
			"title": "Post Meta"
		}`
				: ''
		},
		{
			"area": "uncategorized",
			"name": "query-default",
			"title": "Default Query Results"
		}
	]
}
`;

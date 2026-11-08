const STORAGE_KEY = 'cpk_code_lookup_data_v1';
const ULD_STORAGE_KEY = 'cpk_uld_items_v1';
const ULD_TYPE_DICT_KEY = 'cpk_uld_type_dict_v1';

// 업로드된 샘플 ULD 이미지 (AMP 27945 UPS/5X)
const SAMPLE_AMP_PHOTO = 'data:image/jpeg;base64,/9j/2wCEAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx4BBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIALsBrgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APOMgMG4z9KnDgqOKphvQ09Gxxkn3JrlsdVydnyMkfrUbEHDD8qQnNHUU7Bca2GDIwypBDc1WhSeONIpLuWaJOI1c/d/HvVn2pCBuz3oATJ5zkCk6jJNOUnFIegOOaQhjcHNVmubizunlgeaISmMrNB/rYZEbKkexGQfY1ZcHFMAY5z0oAkM32h5JjHs3uWI+tHPXmmxZ5A6YpefyNDGOAAGMfjTbWeKHV7XzlQgbpIVfG150w0aHPqRRk4qGeCO4jaOVA6HnnsfWpbA0NSmjutQuLyG1Nkl03nG1Jz9nZhlo8+gJNQAHufrUUMYiiCKOAOeetPyB1GKEA/jHvVzw9aWuo6/HZ392bKyK4nuN4XymcMsRJPbzNgPsapEjqBkVVmWVLkXNuYy2wxyRyLuSRMg4I+ozUyQFyIz7AJgVkXhh0O4dadtBX1z6il8xpsyu253JZj0yT1oX379KYFRtPtnbP2dB74waim0KFrWC68mRYJ3kSKbPDMhG4D6bhWlgDG7pnt2FR2OoXcujR6Jcq4Fo6mNcDy8jd+9U9dzqwDDp8opNDRSbQdLkjCyWqMf7w4LH19KoX/h22W1ZrH9y4OdrNhT9cdD710QDDoBjNDqGByvGKNx3ORi0jUYnLrMEbIwVuSOfxq3byeLbdtkN3eBWP3hNn+ua6PTb20sNdZb23+0JPYSQRxhgu0yHy2kye6K2/FJDHtGS2T6+vvQkguZ51nxppzKf7bu5Y8Z3IScY9QDmtjSvif400tlmS5tL1TlsXFqx7eoxxUewN97k1a8J2ulS+LNNs9amMGlPK8l5KHK+XEF657AMVyewzRYaY+T4xeIpV/0vS9NdMfMI8qT78mr9l8UbSQH7Xoc4I5zFIGA/GucigV4xvRHboWIBzjjP49aYdOtC+fIjHptGOaVh8x1y/Ejw+2N1texH0MROPyq1beM/ClxgDUFiLdBIu39K4i10BdQvhY2YVZ5I5ZVBJwwijaRgMdyFwPciqJ0e1mgDIX2uoIyQePyosK56za3WlXkgW01G1kyRgiUDFYWn+MtMuby+gdmtHtriSGJy2fM2MVJ/HBryfxZYNpWlfaI3AWUtD8q7Svyk5yPoa7jwD4aWbwct5e2SzTPC+oXBBwbeJmVV7+6+v3qb0Wg4u7sz0Sy1KeSISW2osynoRLx/Or0Gs6/bbmi1GQqVxh/mAPrzXmsvh4l0FnKYiRgrk4Le3NLb6fq8UJJ1G6g2uEKAsT1w2QehGOlZ3Zpynpq+MPEcfLzQvns0I/T0qZfHGrkoZbS1lIPOSy5/WvK9WvdT02zubmHV2migTc4lQEjHrjvzVC08d6nArifT4Z9p2HBKtx1yCKYrHuCeNoJRi50pSTzlSD9eoqxY+IfC16jWtxpAJkdTse2Rl3Dp+I9a8Oh8fsylpdJlx6Ic1MnjvS9haa2uIyOMFKmy7Bc9U1vw58PNSuUinhitZILo3UflO8WyR0XLAjgH5VPsa2ZNC0W61CG4TVYTIkEsCJ5gJKSBd3fr8g59jXk+q+J/DlnfNZPqKvLGqF2TlQxGcZ74p1prGkXg8yG+iJz0L8/gKnlTK5mes2nhuHyUFpc2zpHGsKFRjCJ91OOw9Kc+i3yD5fLkHTgkH9a81gcqVa3uGUk7gUbH0NW4dR1iCQeRqV2i4/ilYj9aPZoOZnbyWF6hObSRgP7uDVd7e8JwtpJz3IwKwovE3iGHCi7L8YIdA349Ksw+NtZU4ktLaUDvzuP4Cl7ND5mdHYeE/FOpRK9lYxpv+40jcAe4rmPFemS3+j654euYyJpLaa2kUjoxBAx+IFdTo3xbvbN9t1ZEKiYVIl4/wA+9Zsni3w7fajNeXNrMLmdyzsYQ3fOOvIpKOum4rvZ7HDfBfUn1T4W6K8xzNao9lJ/smNuAffDCuwJ96j0mLwRpts9no5Wxjmme5dYwwBkb7zfN07e1XRb2Mo/c6rAc9AzDNKabk2kVCSSSKQ56dPrS4IHU1ZFhJj5JYHA6YamSW0yLkoCPUGosVcrgeoINKdygFRmnlXXqpB+lMw2M+W2PpSYzwxX5+Zhj1p6t1IqsrA+oFPViGr0jgLG5gcc/j3pQxxUWfft3pQeAc0wJNxyKCe3Wo8ijOaQD99LuqI9QMml3HPIoEPbGOn40hI/Tp60wnAwaPfBoHccnBPXFGc9+e9MGOo6mlBOelJgPHPHT1oB28EZqM5JPpQzcbfSkMkGenFD5zkYpnsOvrTh0FFgHggjj1pYwAOlMVgAQAM/zpUbDc9KLXAnB+XOKcp6DtUakYGDkU9Tjp60wHhQy4HFKI8MGHUjGfakBzjFPJy3XAqWMUY6dadg8j0pFIx0+lKueD3oQEMlrDcMpnjVtjbk9j6ip1UcnHWl/Kl/WgBoHqMVVvYWnkRo3eOWFg8bocFTjn8COKt8Z9qQDBz0zSAFO0DrSdXpTjtmk/iHp3pgVr5r5JkksXZSyPBNtk2P5bYJ2sOR0wfYkVZwcLkAc8hen4UmO9OJzikBzHxROfDUSjoZ/wBfLeumi1vWLG3t7HTIMwapotvZzy9RGi+XIVA7ElV+bnjNct8TWH9h26cZa5OPwjbNdt4Esl1nwet39tFu9j4eGogHB84xlIintkk89sU27K442vqT3+sS6VAuqbXkW0mindEAY7VkUn6jj8s1c0/U59Xt11O7ieGa/klujEDkqHkZgvPPQis9hiYB/ujqPWpbmVid65JZe30rFdja2tyt4v1uy8S+EGj0uA7rDRo7C4k8vYJbg3DsQM4JwrLyfUiovKRyxdV5yenT2q54n099M8Jwb7SG3GqG2vY/KA/eRvOELHH8WUP51BgbjnPJNUmZvQWysNNl0jVLq4kMVxbz20VjGDgTM7HzVx3IjG7261VfTrSQjdAh5z90c0xbJX1ZLwswEcZjwDwxJ4J9/erxOcE96dhFfTfDFtqusWGl2yQRzX1wtvG0g+VWY9T61m/8I3p86iQoyeuzHatLVTdrHE1hcNBco+5HVipHBBwRyDgnkVYWJIIViQEBAAAPbinZBcxP+EfhtEP2e4nQBt2dx4/Krh03XLVpYhq11BcRvsKSEHb0yDn2NXb0t9ilCAO4X5VyQGPp+NS211e6lG2paoMX15I08wC4Ck9FAHYAAfhUtId2U4G8URFh/bETAHrJEDn68VLHf+J1y0c9jcLnHyqR+tWJx/o84U/N5Z6fSpRq8Wv51W2tltbd1iihjAwSsUapuI7MSpJFFh8zKza5r8eWk0SKTaMEpNjI+hpkXiry28q40S8ST7zbCG685q7cMyWs0gYLtjJ3HoPenyzWNxcNPpQZbF3H2ffnLIFA3c84YhiPrU8qK5mVI/Fejs7R3Hn27jkq8Z496sw65ojpuF/AAcHDZH8xxTHtYLmZFkSMeY6oWYfdycZ/DrSXVlpk5dYRDdWscjLBMEAEqAlQ49jiiwuYuxX+nypiK/tmz0AmHH61chv3bAW/YqoyoWb/AOvXPr4Z0u6eVUsIcrC88rHgKiLlm59vSqsnhPSmQFVmjyc5SUj9O1HKPmR2sNzeCMMl3MSfRsitCz1jWyDD9rRhGBtDxA4Feax+F54G+0WWoXcKglQS5wWxnb9aWGbxdakqt2ZscfMit/MUuUrmRhKSDyc08frUfNPGcZ456Cuo5iU54pOnuM5pvXIHUUo6A/pQIXuf50vIHFAxnpTxtOc9aAY1cD6mgA9SQfelx9RR365pCGMSBg80Lzxnp0xTuMgc8UYGec0DGngnA5p3OKD0xjgGgZwc5z2oAbn86cQCcY96UkEZ9Oope+enagY3ocUYIanhR3pQe/8ASgCPI4p55POaMcelO46UAKrY6dPWnr6Z5JpijIwakAAFMByE9Sc1IDkepqMD0wc1IpAXGMUmrgh645APFOBz6U1QBingDHSiwwUnvinZ/CkAHIxz6U4YwCOtSA0HnPajIJ4GaeV6EjimsB1ouAh6EU0kbgevFP8AlxyOaZgccUAHHPFKOlJ0bAHWlPFAHIfFB2Fnp/HDTS/mIwP61seDLGS98C+FrkXc1ssSzQ3EaEgTwmcsFPtkdOhz7Vm/EW0ln0WO5RVK20peTnoGG3+eK6Hwq3leA9BSPADWkbccc5OaJfCOHxGndSYct1yefapYyjQp8xwwz7iqV0zeXkdTSrKDEiHOABn2rKxsN1vUNd1Dwzu1x4M2L2dlYJF0WBLgHPPOSW71bcYkYejH+dZmv3Ky6Nd26krJHsm56fI6v/StOU/v3/3z/OqRnIVCNvSlIzjtzUafezyakyQBuxzTEK2C+89qH/SkOcZAA9RTcYAGeTRcBxXdgdB6+tSLxx0GBUQxk4yPrTlJ6k/jUsCV1JQrgc8U6JQkQjX7qjApiscnJzn1qRMdOtIYTgtFJHnO5dv50yCKOCGOGFFSKNcKo6AVL7CkHYimBBqMP2qwltSSBKNpOcEA+9WIo0hgjhUfJGgVR6ACk4+tLnJ4z0pAV723a7ltV8xlSOYPIFOBIoH3W9QfStDliWz1NQRtjOR+NTpzznAFAEdsL2a+nWaUPp8BLWsWOkjhQ7N6nC4H1q/FEpODgHGcgU1MBcYx7DvVhEGOaBo8tIPpSqDjmjrgnrTuhHFbIxHJnGaXkdetMHHYVJg5yOKYIVc53Hn2p4x9aaCBkdM9aOnOaAsLz360MM8d6U84GPrVyy0rVL2FZbWyeSJuVckAN9PWk2luCTZR2kcflSjng9q1f+Ed1sDJsHYY/vCmPoOtIoZtPkA9jmp549yuV9jNxj/61L06Ve/sfVgeNOuG/wCA9aU6RqoB3abdA/7mf5Ue0j3HyS7FDHqKXv8AWrR0/UAOdPu/whb/AApf7P1DI/4l91k9hESfyp88e4uV9iqQcj2pQDU5sr7oLG6B9DCc01rW6jyrWtwMdcxH/CjmQcrI8Uo5+lPWC66m2lx67DSpBOcgW05I9EJo5kHKxoHHHFPxx796BFPvA+zTZ9NhpSkoJzBIPX5TT50HKwGSelSLnHPNMVJCOIJeP9k0/kYDRyKw9Vo513BJjlPzfhT+fXNMDDrtb646UolQZz/KldDsyRc//XpwGR7UzzI+uf1qRXi6BgT6ZpXQWYc7eaCM8Yo3xH+IEeuaXenXcM0mx2EwOMdaYQTg44qQkYyD+NNZk+X5lP0NCYrDcZbjNDjj19KeSPUUhKgYJqrgYPjUOfCl/gEnah/Deua2PhnpV3rvhHRbK0eJJk02e4HmZ+ZYBJIyj3IGB9apeIo1l0HUosA5tXIye4GR/Kq/hAarcfD7Qm0i+ls5PKmhldVOTE0jhwCOQSOPoTQ2uUI35jWdxJiQAgNyARgihFOML3rRnhYqdkThc4yyHNQQoI0AZWAHXI7VmamZ4jt54PDclzLEqx3sQeBw2S6C4ETE+nKsK1p+LiQL/eP86x9QGovoN8NSuBLHbxLa6fEqACOPzd2cD1JySe+a2HJaZ9wwSxzx70dCJbiL7ZzmnEcDPOKRAc4B6U8jkcGmIU49KB04OaADnj+dLgYxjmkAw8nilT06k0bR0PIPalxjkUAOXIOeDg96eDn/ABqJf681IMZ4PSkBIMdQaKaM07JBx2xQFg/lS+nH1oA6ZNLnBx3J6UDFGCQKliAJ/pUfSnqeQc0DLaHkA9PWrMZAHWqUfUck5qzGaASseZngjjpTRgCn9T6UMMngfhWtzIUdOBTsjP8AnimDOe/vTx6/yovcB6g5PTkYoKgDAGaAeQDj8KcBnmgBR2yK9C+HjmTwjaqTkwSSw/gHOP0NefD2wK7f4YSb9M1G36+XehuvTcin+hrOsvdNKXxHU853DNObJ643djjmnbTnOKCp25/OuWx0jVx0PI/lT1RRkgde4FZ+pa1omkzpBq2r2VhLIgkjS4mCFlzjcM9RkGrenXllf2qXen3cF5ayEhJoJA6Eg4IyPQ0W6iur2JiMjJ5x604AemKcO/8AnNRXU8Fray3V1NHBbwpvllkOFRR3J7DmmA4BccKPpSMCeB09M1n2niPw1eXcVpZ+IdKuJ5m2RRR3KlpDjOAM57VqheenIpNNbiTT2IURf7pyemakWOPOdg9DTyAM1man4g0DSb37JqetWFlcbFk8ueYI21uhwfWqSuNtI0CvYKPwpTk+g9M0yzurS+sor2xuYbq2mBMU0LhkfBIOCPcEVU1bX/D+kXK22razZWMzxiVUnlClkOQCM/Q0uVt2C63NLaARk5X3qQIh5Crn1K1zw8a+CwAT4r0kezXIBrV0PWdJ1qNn0XVbPUNn3/IlDFfqByKHBroLmT6l4RIWB8pCPcCpPJiBGYY/++RSryM1Ig5yRSQxjWds4z9lgJHOTGD/AEp62VpjabWDOO0a/wCFSEfnVbVNU03SLAX2ralaadak4WS5lCBj6DPU/Sna+wXsPbTdPbG6ztj/ANshSNpWmMBusLYgdAYl/wAKj0bWtE1tJZdF1ey1JYv9YbaZZNo9SByB74q67rGjyyMqRqMs7sFVR7k8Ci2tgv1Kf9haPnI0y0z/ANcgKj/sPRjnOmWuT1HlirYv9NLEf2nYBh1BukH9aPt2nkHGpWGVGT/pUf8AjScWF0UG8O6HgAaZbD/gOKYPC+gk/wDIOjz2wzf41uEDYpGGBGQR6VmarrmhaTIseqa3p1jK4JWOe4Cuce3Wkr3sDsjF1HwR4dvI5IJLNxG4KuiysAwPbrmvOtU+FFnd+JNU0/QtVuNFtrS2t5bW3Lu6OX3B2HOQoIAPua9qkYOqyxuskcihkdDlXB6EHvVeCBHvxOQN7Qvb7sf7auB+hqlJx2E0meIN8G/FkeGg8XwFs5PzTAgfn1q5F8G9f3f6V44kJx8ixLJy3YZZuOcc17RK9nbjNzdW0Hybv30oUlR355xT1iRpYpgAR8sinOQR1BHt3qvaTtuChE8v8K/CnN1YalqXizWNSsgiTvZOdoZioYKWycgN+eK7Y+CdEcn5bhTnPEmOfy5rU0YJYaf9jvbiGGSK4uNgklVS8Rmdo3AJ6bWA/DFXVurMnIvLU4OM+cuM025MLRRzn/CC6LniS8H/AG0B5/KmnwFpRIxdXin3YEV1cZVkDqQwPQqcgj1BpxIC5bAHJyfSldrqFkcg3gKz6JqNyM+qqaZJ4At8HGq3A+sS/wCNdkGUnKvG4HHyMGwfwo3DcRvTd/dDAnH0p8wrJnEN4CTg/wBrS47/ALof40xvAQHK6oxI9YuT+td2VAO3Me88gFwD+VMKkgsMMBwSpyAfwouwsjhf+EAlGNurAA+sR/nmgeAbzHy6rESfWE13IOeKkRkadrcTRtOgy8QYbwPdetJSkx2icD/wgupDO3ULQ/VWFJ/wg+rc/wClWh9gx5/SvRE747VmeK/EWi+FdHOs69eC0s1lWHf5bOxds4AAGexpqTewcsUcc3gnW8AiS0P/AG0PH6UxvBuvABsWrewlAr0WyuIr6xtr20JeC5hWaJipG5GAKnB5GQR1qZI2c7VGeMnBB/lU877hyo8z/wCEN14HlLY55x5tH/CI6+Dxaxn0xKOa9RSNtuQpKjvihEZmGxSSf1p80g5EeTalo2paVHDNeQKkcz+WpVw3zYzg46cCoFzzXZfFFgLLTE6lrl2A9cIf8a4zGevNaRd0ZyVmedFR6f8A1qT06073I+tH05HetjAQD5s96co47c0cY5OKcBx1Ax60IBUB5yM/jTkBUmkXIODTj16GqExcZ+ldX8L2KarqkGOHhikP1BYVy2OR6VvfDuXy/GKRnJW4s5UA/wBpSrD9M1FRe6yqb95Ho6gepNDjKnHBpyjkDjNJjOc/lXGdh8+ftTKP+Et0QnnOlj/0Y9dD+y1qxn0XWdAdyWtZlu4QT/C42vj8Qv51z/7U2B4v0VRjI0sZ/wC/j1gfs/6x/ZHxPsFcjytQR7KQFsA7xlf/AB8LXeo82HSOHmtWPqMfjVDxPaLf+FdbsCpPn6bcKB7hCw/VRWgPvEEc5xU1qgkuoomGRIdh9MMMflzXCpWdzteqPh3SryfS9StNStTtuLSZJoz6MrAj+VfbNldwalZW2p2xzBewpcR4/uuoYfzr4n1S3az1S7tH+9DO8Z+oYivpn9nTW/7W+G0NnJIWuNJna1YHqY2+eM/Tlh/wGu7FxvFSOPDSs3E9FkA2nPYV8u/tHT/aPi3qUZwRbw28I/CJc/rX1IULsE9SBXyJ8ZboXnxV8SzA5UahIg/4Cdv9Kzwi95svEv3Uj3X9nS5834TWkZ5Nve3EY9gSrf8Asxrhv2rbYDWfDl7tz5thJCSfVJWP/swroP2WZ/M8F6va7v8AU6kr4x2eMD/2SoP2rbUHw/4cvAeYrq4h/Aqjf0NNe7iAbvQPn0KvoKuaRqF9pWoQ6hpd5NZXkLBo5oW2sp+v9Ohr0n9n/wAH+HPFi66Nds3uZLPyGh2ysgCsXDdOvQVofHf4a6P4Z0az8Q+HIpre2M4tru3dy4UsCUdSeRnaQR64rodaPPyMwVJ8vOj2f4XeK4/Gng+11jakd2rGC9jQYCTrjJHoGBDD6kdq6wADkGvnz9k7UWTUvEejM5KTW8N0iejI+wn8n/SvoEkD5zkY7EVwVocs2kdlOXNFNi7WkljhjwZHYAA9BnvXxz8ZPFM3izx5qF20rvY20rW1hGT8qRISAQPVsbj9a+wmbyrK4nXiRYJpAe4IjYivin4eaCvinxzougSSmOO/u1jlcdQmcsR74BrfCpK8mZ4i7tFFPwxruo+Gtbt9a0a5e2vLdtysOjjurDupHBFfXfijVbXxL8FNY1a0Ajg1Hw/LcLHnOw7dzJnvhlI/CvFv2jfh3oXhS30rW/DdtJaWl1I9rPA0hcK6gMrAnnlc5HqK7v4AXDav8ANW01h5jWq6haKp/uvB5gH5saqq1UUai7kU04ScGfLwQYBK9qVkwhOK9J/Zw0DRfE3xCfTNesUvbUabPKsTsQN67SDwQemad+0doOi+G/HkOnaBYJYWzabFNJEjMV3sz88k9gK6fae/yGHJ7nMfSkOvw6L8KbTxPKvmx2fh+3ugrH77iBAq/i5UfjXxXrWp32tapcarqlw9zeXLl5ZHPJJ/kPQdq+pfjBAbD9mgW8QYFNN0uJs9QD5RI/MCuE/Zg8HaBr2n67rOuaVb6iYZYrSGKdcooZWZ2A/vcDB7VzUXGEZTN6ic5RiR/sseMruLXJfBN7cNJZXkUktiHOTDOq7iq+gZQePUD3r6IgK/ZwcgfvgeB7V8laZpzeCv2grWwgEgg0/xCkEbEZ/dmQAAn12GvraKM+ReRYO6KRse+Oc/pWOKiuZSXU1w7drPofL/AO1LO978WI7FCXa10+2gC+jNl/8A2evqVrcWi2tonyrbQRwD22Iq4/Svlfxkg8Q/tQzWqfOs2vwW3/AYyiH9Fr6svnEt1JL2Mhb8yadfSMV5BR1lJnzT+11z400PJI/4lPY/9NpK8UZhtPzk/wDAq9t/a9V18XaAWQrv0jcPcGaSvY7D4e+ARYaeG8I6TIWtYdzPCSWYxqSTz1ya3VX2dON0ZOnzzlqbHw44+GvhbgcaPbcf8Aqz42Yp4H8QsOCNJujkf9cmq/YwW9rbQ2lrCkNvBGsMMScKiKMBR7AVi/E12T4beKZEOCuj3X6xmuKL5pX8zpekTzH9jPe3hzxCWJI+32gGf9yTisP4IzSXX7SXiiWV2bH9pFcngfvCK6L9jUbfB2uOQAP7Vtxn1/dvXM/s/jf8f/FMp5Hlag35zf8A166p6+0OeO0Dh/2gLuf/AIXL4k23EyBbhFG1yAMRIKT4J+NNR8N+PdLaTULiTTLqdbe8heQspRztLYPQjOc129nYWWr/ALX97bX9pBeW326ZnhmQMjbICRkHjggVmftL6Bpmi+ONEutIs4LH7bbK7xQRhE3pLjcAOBkY/KtVNXULboz5XrPzPbvjj4sn8E+Ar69s5AmpzzCysn7o7ZLOPdVBI98V8haRr2q6TrsOuWeo3IvoZhKZWkYlyDk7ifvZ75r3r9su5kaHwvZZwkstzK3+8BGv9TUv7RXhTRNC+C2i29jY29tJp1xbxJJHEA0rPETIXPU5Izz6VnSkoRS7mlVOTfke4aZfRapotjq8C7Yr21iulXPTegJH4EkV45+13ctJ4b8M6MhJe91N5Ng77VCjj6yV6T8KgW+FXhQNkn+yY85/3mxXmXxlUa7+0D8PvDABdYPKlkUdt82T/wCOxisaelT0uaz/AIZ0/wC0vLcaD8HGtLK5mtZILiztFkico2EXBGR0+7Xyvb6/rr3EUS69qZLSKoUXb85OPWvpj9sC43fDCJmODNrSED1+SQ12Pgjwt4eh8EeHFfQdKeVdLt3dzaoWZmQMSWxk8mrhNU6d2iJQc52ueb/H2/1DQ/jZ4FuYtQu4bJorZZIFmIjLRyAMSM4J5HWrH7Rs+o6l8YPBvgfT765gEs2+XyZCufMl25OPRUP51V/a/tj5fhDWurQ3ssLN352OP/QTVvQpE8Y/teajrSc2mh2IkQ9RlYlC/wDj7mnBJRUuyYSb5mvNHf8AxYkDXWmIn3Q8zKR6ABR+lccCRwCfyrpPia2da0yLP3bWRj9SwH9K5nI9PzrKHwlz3PPwMr0pQMdOlKM54FKOnPNbmAgIznnNKozycUYBAIxgHFKBznmgByDmnDHrzTAMHnpUgJxg9KBMATjJrQ8NT/ZvFOkXAO3F0ImP+y4K/wAyKzxnPP502eZrZBdLybeRJh9VcN/SiWw47nthUByDgYOKbIuQQTUrnMjMvRjlR7dabJyOuK4Wdh85/tSOD450yMAfJpUfPrlmP9a8rs7maxvbe9gO2a3kWaM+jKQQf0r0/wDagZW+IdqoYsyaXAH9jgn/AOvXIeJdHa28G+FdcVMJqFvPExx1eKZh/wCgla9Wi0qcUedUu5tn11p95Dqen2up27AwXkCXEePR1Df1q2jGNlfJyrAj8DXnf7PWsHVvhjZQOd0umTPZuT/dzvT9Gx+FehtnHXivMqR5ZNHfGXNFM+PPitZiw+JfiO0UYVNRlKjGOCxI/nXYfswa0LHx1PokzfudXtiiD/ptH86fpvH41m/tIWptvi5qcmMC5ignHvuiXJ/PNcToGpXGh69p2sQAiWznjuE7btrZx+OCK9O3tKVu6OC/JUPuGxGL2Dceki5z6ZzXxD4quxf+J9WvlJIuLyWQE98uTX2nJfQHT5tXt2H2U2T3kTk5BTyi4P5V8RWlpLefa2iGfIhad/8AdDAf+zVhg1a7NsT0R7b+yZOC3ia0YnlLaZVz6F1J/wDHhXR/tQW5l+GtrPgA2+qx/k0bj/2WuF/ZSuNnj3UrTH+v0pyOe6SI38s16n+0Dbib4PaywBJhmtpvp+82/wDs1TV0rr5Dp60Wec/smT7fEHiKzJH73T0kx3+SUD/2avSvj1B5/wAHtc4yYHt5hn2lAP8A6HXj/wCy7ME+J0kLEj7Rpk6cdyNr/wDste4fFy3874UeJ0ZvlWx3gnviVCKmsv36+Q6WtJni37Lsqp8T5oycedpM6gepBRv/AGU19MHLTJGckD5j+FfKv7Oc7Q/GHRxHz50NzGw9QYHP9K+rITumZjnKqFFLE/GVQ+Eklj3wyxnH7yJ06f3lI/rXiXwx+Ceu+FvHWj+Ir3WNKngspjJJFD5m8gowwMqB1Ne4DI6Zp6qeWPHFZxnKKaXU0lBN3Z4/+1hsX4Z6ar8udYTZ+EL7v6VH+yUpb4da4jj90+qlMeoaABv0IrL/AGvtQxp3hnSVOS8txduM+gVFP6NXU/su6ebX4RR3LDH2/UriYH1VQkY/VWrZv/Z0ZL+Mb3gr4Z+EPB+tjWNBtbyK8W3eEtNcF1KuMHj1rwH9qSYz/GG9h3Z8i0tYR7fulOPzY19XrwpbHb+VfJnxkQal+0Rqluqg+Zqltb4PfCxp/SjDNuTbFXS5Uke9ftCQmP4Ja7Bj/U29mv8A3zLEK4r9kBw3hXxRFnlb22YD6xyD+lel/HaFrr4YeMYkXOLNpMeySox/IKa8R/ZT8S6TpN/r+j6pqNtYG/ihmtpbmTZGWjLZXceAcPn8KIJujJIcmlUVzT1iaG8+N3i7Q7x42QX8V/aRFPmE6xqPMVuoIUnjp0NbPw/8d+OdctllaQahdzW8sfyWwITdJ5Du4BG7CFmz6kGvPJfEFjqX7Ss+rafMtxZXd8bWOUdHUx+VvHsSMiu5+A90tj4U16+chTY6Zqcq8dCjqx/mKupD3VfyJpy95nAfBANrP7QNpqBBci8u75s/7KuwPHvivq+MMGTeo2ZG457V8w/sl2y/8Jxq+qS7vK0/Q55W2jJ5Kg498bq9t+HHxI0Dx/c6haaNa6jA1lAs0jXSqAyswXA2k85IrPExk56bIuhJKOvU8C/aMk16XxFpa+IV2TwWZt7YBgV+zpIVU5BOSzb2JPPzY7V7/Y+P/BVx4isfCUWsq2qGCCNcriPzfLUeXv6bs9vXivG/2vgB4s0DsP7Lb/0c9eOzW2p6WbS9ntbuzMwFxayujIZADw6E9RnuK2jTVSnG5lKo4VHY+9MtG6pID1IJ7/jWJ8Usf8Kw8Ulf+gPcf+gGtXSL4atoWk6xzm+s4LlifV4wW/Umsf4qDZ8MPFhzx/Y84I+q1xQVpr1OqTvFs8//AGNfm8Fay20f8heD/wBFNXL/ALNH7z43+KZM4/0S8I98zqP611X7GgJ8E6vjPOsRf+ijXJfsvfN8YPFBz1sbnn/t4SumT/iHPH7Bb8Ht5n7YurMAPlnvh+UDD+lQ/tTtv8feEoeOLUH87g/4VhQeKtP8HftKa/4i1WC4ntYr69iZbdQXy4ZRgEgd6h8ReKF+J3xt0FtOspobNp7aztklwZNgk3MxA4GST+ArTkampdEiXJcrj1udn+2nldT8MTDJRXu8+xDRn+Ve13FvoXi3w/YXN7Z2mq6XeQw3UKTLvQnaOceoJIxXGftJeErnxd4HnuNMjM1/ply97BEoy0sRBEij1OMMB32145+zr8Sbnw5rVt4X1ecyaBqE4jUyE5spWOA6+ik/eH41jFc9LTdGrfJU16n1TY28FpaQWdnAlvawIIoYoxhY1HQAeleL6OW1j9si/uD80ei2TAH0KW4H/ob17gistysLja6vtI9CK8L/AGdHbV/ib8RfFTEyGSZoY29pJyR/47HUQ0Un5fmXU3SJ/wBsQ/8AFAaHB0L6rnH0ibP86X4R/GR9f8Y6b4PuNIjt9Oks4rKwnBPm+bHEBlx0wxHbpxUn7V+m6pqfh3w5b6ZZXV7N/aEuVgiZyuUAyQBwOa87uPBE/wANvjr4I01NRa+knmtLlpNm3bIZNroB6Ag4NaxUZU+V+ZlJyjO6PUv2qbNbn4UC8ZMtZalBKpB+6Gyh/wDQhWZ+yNYTHQPEfia6O6fUbxLZHI5Kxje/4ZKflXWftJSQR/B3xEs+ArPEkWO7+cu3+Rp/7O620fwS8PG2UfMZ2m95fMIP6Bay5v3HzNHH978hvxJbd4lgUhTssl4+rGudDZHt7VtfEFifGEuT9y2iUe33jWIh7inDZCnucMRgjrQx6cGnjuetGPmyQcfzrYxGAA4xz6Upz7U7HHv2pVxQAKM44p5HHPIpo4FOHuBQAg69qS4i822mizy8bKD9QafjJPFOQjcOOlAj13w/ci90HTLzBzNaRMSe52jP61akGQTisP4byeZ4K0+NnJa2aSDp2WRgP0xW/JhlOR9DXHPdnZHY+Xv2j5PM+LF7HxiK1t0/8hL/AI1vavpn9o/sq6HdoAZNLvJZycc7JJXRv1CVz/7Ro/4u9qh6Aw25H08pa9d+EWlLrf7P1to5AYX1newjIzh/Ncof++gtdrly04P0ORR5pyRwf7KereV4j1fw/Ix231qLiIdvMiPOPcqx/wC+a+hQMjFfG3w41ZvDHxB0fU5SUFreLHcZ4whOxwfwJr7MkTy5HVRkKeo6YrLEwtO/c0w7vG3Y+cv2r7QxeM9Ivh9250xV6d0dl/oK4PUtJ834Z6R4hiXIivp9OuD6HAkT9Gb8q9X/AGsrMtZeGr8Lja9xbs3/AHywH/jxrE+EWmDxL8GPHPhsKHuIZor+245Eiox4+oRh+NdFOdqUWYzjeo0dd8OfEpv/ANnTVndwbjRLC5snJHO1lxF+GHx/wGvJvhJpP9p2fjJigYW3hueUexDxn+hrM8JeJpdH8N+J9ELEQ6zZJHjPSRJFYf8Aju4V6P8AstaeLy18a7xkSaYLTHr5iyf/ABIptezUn5gnztLyOb/ZruhD8WtPiJx9qtriH8TESP8A0Gvfvirbvd/C7xPCw3AaezgdwUdG/pXzV8FLj7D8WfDM2SB9vWLP+/lP619Z+JrMXfhfXLQgkzabdIB6kxNisMVpNSNMPrBo+Pfh14pn8GeLLXxBbWqXjQJIjQu5UOroVIz2612Xj740ax4s8Nz6BFo9rpdtclftLxytI8iKQdmTjAyAfwry+0gmuJ4bW3iaWaZxHGi9WYnAA9ya7K1+FXxEnuEiHhW9h3nG6bair9STxXVNQT5pHPBztaJr/s12c118XtPnjXKWVtcTyn+6vlMg/wDHmA/GvquEESOMcYB+tcF8Evh2PAemXMt7LHc6zqAUTyRnKQxjkRKe/PJPsK9AUgSgeq4rz69RTldHbSg4RsyTHHApTwuOtA4GKTzYoiZJmCwwqZZm/uooLMfyBrM0PlL9p/Vm1H4qXdoGJi0m2is19N23e/8A485H4V9HfDXSTo3w68OaUUMbQ6dE8qn/AJ6SfvG/V/0r5I0yOfx58VrdJQzPresBpOc4WSTLfkufyr7dnZXmdkGFLfKPQdh+WK6cT7sYwOej70nIRF3MqDuQK+SbrGr/ALT7Dlll8WBPfCzgfyFfXVkN17AO3mrn6Zr5F+D7DVP2jtMuiSyy6xcXWcdceY+f0ow2ikx1t4o+tNVtrfVLS9sLv/j3vYpYJif7kilSfwzmvhLxXoOoeGNfvNC1i3aG6tZCh3DAdc8OvqpHIPvX3gATz61z/juz0RvDWr6tq+k2N29jptxKss0Cs67Y2KgMRnGSOKmjV5HYqpTU0fIvwjsZNQ+JWiQxnAinNw59FjUu36LXeaDey6b8MfFjr8uf7QtZATjAkaFcfniq/wCyhpX27xxqt6y5Wx0W4we4eUCMY98M1V9RH2b4O+L7qWY7rjxImnRRAdCf30jE/wDbJRj610zlefL6GEFaFzqf2S7MjQ/HF+V4Nmlsp/7ZyuR/46Kq/sbn/ifeJk7nTIz+UyVs/s26v4c0b4V6uNU17TbG5u724byp7hVcoLcKuF68lmrkP2T9Z03SvGt/b6heJbSajZpaWitn97K0yYUe/FRJO0/kOLScD2b4nfCzSviBqdlf6hq15ZNZ2xgVYIlYPly2Tk+9cP8AthW0K+GvC0iJt+zzTW0IHRI1ijAUf98ive0gkcMFidgODha8L/bG/wCRS8N/9f8Acf8AotKxoNucUzaqlyM9U+HSZ+G3hfkAjRrbr/1zFVPi42PhR4pfH3tKk4HvgVb+Hx/4tr4WXOM6La9f9wVT+MBCfCjxSBwv9lyAfmKzX8Repb+D5HE/sapt8B6o46nWUH5Rf/Xrj/2Vhn4teJj/ANOM/wD6UpXY/scZ/wCEA1LsBrK/+ihXJ/sm4PxT8UnIx9hl/H/SUrZ/8vPkYR+wcR4j8Nav40+OXibRfD8cMt1JqV3J+9kEaBUYliSfpXsPwO+D954O1l/EniG5tJ9UijaOzt7dt6QlhhpGbGCdpIAHrmuW+Cm6T9qHxMzdd+p5/NhX0cq45zk0q9SStFbWLpQi22+41RIjAhtpHQrXzN+1F4OsvD2sad4p0mNbaPVJHW6iTgC4TDb1A6bgeQO4969M+JfxH1nw58VfDvg/T4LM2mprbNPLKhaRfMmKHac4Hyj0PWuf/bLKJoHh60zg/wBpXBUewRR/UUqUXGafcdVpxa7HsOoaokHhOXXpMgR6QL0k9c/Zw+fzrzD9kKyaH4Y6lqD5332qkZP8QjjHP5ua6b4z3S6R8CNW+YgnSLWzT3LrGhH5E1J8ALD+zfgx4bhK7Xnjlum4/vyED9FFSlaD82N6zR3SNIgOxmXPUg14P8UWE37VXgK1ZfljS0P5zOa6f4mfELWfDfxZ8J+FrIWiabqQha8eSHe5DzFCAe3A/Wub8aRpc/tl+G7NeWs0gVxnJUrvfB/AiqpxcXfumE5Jq3mix+1vqEz6DoHhi0BabVNQe4KD+IRjCj8S/wClav7KN61x8JJLR2Bax1aaNQOwdFb+YNZ2tLF4p/a20DSJMS2mhWIkmXqFcI0pz+LIKg/ZSkktNS8e+HpXOba+SURnsVkeMn9RVW/dcvzJT/eX+R0XjVt/jDUmznHlrz2AQf4mskDA4GK0PFD+Z4p1ZweBcYH1CqKoA/L0qVsEtziVGOMEUYA6GnYyBnPp0pdp4PHFbWMRuORS45z+tHT+lKQQeTSGGOKVRx6UdT05py/lQAHrSoBzn8KCCOTjnrSj8RQB3nwokMmkajbkg+Rfbxz2kQH+ea6+VSUbHUDiuD+FEoXVtVtD/wAtLaKdR7qzKf0IrvnXEbcc4rjqfEzqh8KPlX9oz/kr+rj0jgA/79LXuXwFKxfCDw9IssSlDMSTIBhvOY85rwz9opifjJrmf4fJH5RrXAgsU2b32/3dxx+Vd/s+elFHH7TkqNnW/GzSYNJ+KGvWlsUNvLcG4hKEFdsg3ADHpnFfT3wx1r/hIvh3oerFt00lqIbg+ssfyMfx25/GvjMKBX0N+yjrJm0LWvDsjktaTpeQg/3JBtfH0Kr/AN9VOIj+7v2KoS99+Zq/tS23m/DG3mUD/RtUjbOOgeNh/NRXHfsj3XleI9eteDus4rgKTwTHJj+TmvT/AI8Wf2v4Qa+o5MCQ3A/4DKo/kxrxL9mK5Fv8VYoW4+12FxEPqF3j/wBAqYPmoMqelZM5b4raCPDfxC1jS41xbrOZbbjgxP8AOn6EV7T+yHbAeHdXutuPO1SGIn1VUyf/AEP9ayv2r9BAXRPE8S9Q1hcH3X5oz+RYf8Brq/2YIPsvwqW5UANcapPL9dqoo/kaKs+agmxU4ctVo+erTOh/EmH+D+z9ZXPOMbJh3/CvtueASXzwsAUkZoiPUNkf1r4x+M9qbD4reJ41wCNSklXA6Bm3D+dfZWnXAlWxvMlllSGbOOuQpz+tLF7Jjw+jaPhvRnbTPFljIxKm01GNiR22yD/CvuS6hU3cvXAkJ/U18SfEC3ax8deILcfI0GpzqMdsSHFfbltL9qtbe6H/AC3gjl9/mQH+tGK1UWPD6NoUAE5pzFVAfjCnmlAx2ps4DRMgHJFcZ0is2RgdTXF/HDVzoXwn165V9s11EtjFzgkynDf+OB67WJdq5PLHrivCf2vNXCWXh3w6jDMjS38w9Mfu0/k9aUY800jOq+WDZyf7KekC9+J7am8eY9IsJZw3YSNiJP8A0Mn8K+ph0r5w/Zq8UeC/Cfh/XbrxFrkVhfXt1FGkRid2MSKTn5QeCz/+O17D4X+JvgbxNr8Gg6HqlzdX86u0YNoyJhFLHLNjsp7VriFKU27aIig4qG52KP5W6bIBjRn5/wBlSf6V8o/svILv402FzwBDZ3cxz6+SwP6tX0/4mnFr4W1u6IysOl3TnnGcQvXzb+yDAX+JN/cbQVt9FmOfQs8a/wBTTo/wpMKn8SKPqTtXAftC6mdM+DuuFDh7zybJf+BuC3/jqGu/A+XOeteJftfagIfBug6UGw13qElww9VijCj9ZDWVFXmkXUdosrfshaWP+Ee8RaqSyi7vIbIFTghUVmbB/wCBrXn/AIqSWL4R+IrWZT5lv45HmN2yYJQf/Qa9z/Zo0sWXwg0ZipR9QuZ7tvoX8tf0jrgvB2qDTfF3jDUri3jk0+bxAv2qxvYVlSNSxzJg8B1Dnn0yK35+WcpGajeEYnzuoDthULMegAya6f4Sxyy/E7wx5MTybdVtmbapOFEq5J9q+1orDTYgY4dOsIVaM5WO2RMgqfQe9fNv7HgI8ea2QcMNHfB9P30daLEc8JStsZyockkrmh+1Hr+saV8U9Pt7TVr+1sTp9vK8MM7Ij4mkySAcHpWl+2XrGnXWneHLOyvLe5aaW4vl8mQMBE6oEY46Z5x9DTv2tvDV1dWGk+LLS3MqWaNZXxVclELbo2P+zkuM9uPWvC/AvhrUPF/imy0DSomeW4kAkfHywx5+Z2PZQMmikouEZ32FUclJx7n2l4CQp8OvDCSAq0ejWpOeo/dg03x/ajUPhz4jtZEJabSbk49whYfyFbjQwQ26WdqMW0aJbwj0jVQg/QVKVViQ6h42BV0PRlPBH5Vwc/vXOy2lj5a/Z++Kuh+A/Cuu6drMN080si3dh5KbhJKEKmNv7ucqc+xra/YytpZvEfifVJFyFtIoS3+3JMG/khrmvGvwI8aWPiie28N6Z/aukyyF7S4SZF2ITwsm4jay9Cehxmvf/gv4HHw+8Gpps8sdxqd1MLnUJYzlN4GFjU9woJ57lj7V21pwUW47s5qUJ8y5tkeSfAv5v2mvFZHQHUz/AOPmvo3oeteafDv4YXvhj4p6340uNXtJ4NQN35VrGjeYomckbiQBwDzivTT2rnrSjJppm9OLinc+cP2uLa6sfF/hnxHal4ibUxJOo+7LFIXH6OD+dcRrvinxV8ZPHfh/T9SS3EzSpbQQ2se1F3MDJIRzycZJ9BX1X438KaN4z8PSaJrsDSW7OJI5IztlgkHAdD64JGDwRXP/AA0+FfhjwFey6jpv2y91KSMxLd3bKTEhGGCKoABI4zycVrGtFRV91sZypNy0ehg/td362/wzhsLfgX2qRRIv/TOJGI/ktemeGbH+zPCmiaaBj7LpltGR7+WpP6k1wPxr8Ca3471HwxbabJYxWGnzvNevPLtPzFANq9W+VWr1K4YyzyPGrbCx2jHbt+lYyl+7SXmaKNpts+eP2v8AR7wTeH/FEEcnkQRvaTTR5zC+7fGSR0zlsH1FZ/7Jvh/UtW8eXnjvUZJ5bayjeNbudizT3Ei7eGPUqpJJ7cetfSFzDHNE0VzFE8TjDRzIGRvqG4qv9q023iW3+02FtDFwkSuiKvrhRwKpVnychLpJz5jyH4B6fql98VvHHjbVLC5torhmhtHmiZBIry8bSeoCJ1FaHwt8J+INC+O3jPVJtJuIdC1FJvIuyMRyMXWQAevORXo8/iXRE+WXWIGxwAGLfyBqo3jLw/EwKzTzYPSOBufxOBQ6jd/PQrkSOC1py+vam4Oc3kmPcZx/SoB9KSSTzLiefBXzZnkAPUBmJAPvzTgR6ZqktDNnGDGPpRtOT2pABz+lOOf7x4rYxGke1AxgZp3Udec0KOfx4oGJ+lKo54pcZOTxihex7UgHc4pV6daCOc0DrwcUAbvw+nFv42slJwtzBPAffgOB/wCOmvUJ8lW57cV5BoU32XxHo9yRxHfRhj2AbKH/ANCr2SZfmdeoBIrlqrU6KWx8kftBnPxj8QZOdsyLn6IK6r4YfBnTPFXg2w8Q3+vXtsbsyfuIIVO0K5X7xPt6VyPx7bd8Y/EvbF2QfyFe/wD7PfzfB3QvrcD/AMjPXXVlKFJOJz04qVRpnB+Ovgboui+CdU1fSNU1a5vrGH7QEuCmxkUjfwBnODnr2rg/gDraaL8U9JeSQJb6husJiT2kGF/8fC19am1iu0ezn5huUaCQY/hcFT/OvhnVrefQ9curPf5d1p90yAg4Ksj8H8xU0JOrFxkOrFU5KUT7R8d2RvPBHiOw25aTTLgAH1VC4/Va+U/ghdiy+LHhi4JwGvBCc9MSKU/9mr648MalF4m8O6ZqyAbNVslZgOzSIVcfgxIr408O2+oWPjCxeOzuXax1ONmZImbbslGeg9qnDr3ZRKrfFFn2Tr+jaXrulvpes2EV9ZtIsjQy5A3LnByCCDyfzpNI0rT9F0yPStHsI7OyiZmjhjyVUsck8knk+9a1wFW4lC9N5x9Kj7EEcGuS7asdNlc+Tv2lLPyPi5qsgGFube3nX8YlB/UGvpTwBc/bPh54ZuskmTSbcsT1JCBT+orzb47fDLxJ4x8Y2WraAlgYf7Pjgnae4Ee10Zh0PJ+Xb0r0j4b6Pf8Ah7wDo+hao8D3ljC0UhhcsmN7MMEgZ4IrpqzUqcddTCnFxmz5c/aAtfsvxf8AFEZGN92Zh9HUN/WvqjwFcte+BPDtyC2JdJtTubqSIlB/lXn/AMTfg7/wm3jq78QDxGtgs8UKvD9kMhDKgTOdwHO3Nei+ENI/4R7wnpegC7a8GnweQJ2j2FxuJHy5OODjr2pVasZQiluOnTcZNmksYzhnYj61KAB0FCjjgU4Ad65zZjStfNv7X0RTxjoM5wA+k7c+pE0n+NfSvfis7VtC0PV5oZ9Y0TTtRlgXZC11brIYwTkgZ9+a1oz5JXIqR542PhDdGcAsM16L+zjDdJ8Z/Ds8cExi8yVXcRnaFMLg5OK+sLTStJsx/oej6Zbf9cbKNT+YWtASTCLy1cqh4KjgfkK3nirpqxjHD2adzA+INve3vw88RWen28lze3GlzQwQxDLOzDbgDucE15f+zH4E8TeFNV12/wDEuiXGmC4so4LYzEZc+YGYYB9FHWvbgrk9Dn2FK+I13SFUXuWYD+dc6qNQcV1NnBOSl2B+mBXmfxn+F978RdT0q5j8QW2l29havFslgeRmdnLFhjjGNo/CvQ5tS0u3BM+p2MWP7065/LNULjxT4djyf7Vicjr5as38hUwlKLuhySkrMs+GNMTQfDWk6JDJ5qabaRWwk27d5UctjtlsnHvXiN1bKni/4g2wj3qdYf5f7xaInH616xP420OMEol/KMdVgwP1NeV6XO+r/EvxdaWds/2jUNTtJoEcgczKEVSfqw5+tbUru5nUa0se46POlxpGm3luwaKeygkU/wB4GJQf1yKyfDPg7wt4Xlkn8PaFbafNLF5MkqFmd0yDglie4B/CuU0bxTqGkaHb6NFYW0jWbSQ+ZJKTjEjHbgD+HJHXsKdJ4z1+ThFsYT0yIif5mo5JJWRfPF6nopXcjoyhkdSrqwyGU9QQeoqDS9L0/TYpV0rSrGwWU/vRa26xeZ/vbRzXnV14o1pltETXleS4sxczxQRIv2fc7BFJweSoDfjVSXVNXnB87Vr1yeuJSufywKnkY/aI9bKEMpb5Rk9eMcVFLeWUPMt9axj/AGplH9a8cYM42yySyAf33Lfzpyww5z5afiKap9xOoerz6/oMR2yaxZlv7qNuP5DNVJfF/h+PkXks3/XOBv64rzhTjoB+VKxP49+KtU0T7Q7m48d2KtttdJvpxwd8jpEPfjk1HN47jwfI0aZveS4A/QA1xa9BzjFLyc4o5ELnZ1L+OdSYAR6fZRc9Szt/UVSm8Xa+5JSW1g9dsAJ/DOaw8YHANBxj2zRyIOdmnJ4j1+Unfqs6evlqi/yWqk9/qcxJm1O9fIxjz2xioBjrSfxZ5zVcqQuZiMCxzI7Pn+8SaBFGE4VePanEdwMUKOvvQFwVF/HPTNLjGTml2jHTrS9xxTJuB5Ax6fnThxTR99Y0V3kb7qKCSfoBWhb6Jrcy5TSrsDsXTb/Ok2kUk2ef47DAHfNGAOMnnpTsHv3NDcZ45rYyGhf/AK1KMY5GCaFHOcYpcZ59KAEGccU4cdR0pBx6/WlHXPp1pAOI4zzSjuTx6UDk+xoxjr0PSgBl2zrZyyRjMkYEi/VSGH8q9xWYTqkygBZUVx9CM14myB0MefvAqfcEYr1rwVP/AGh4P0m5VvMdbZYZsHJV0G1gfQ8VhWWzN6L3OH8W/Bbw/wCJvFeoeIdQ1rV45L+YzPFCkYVCewJzkV23g3w9Y+FPDdr4f06W4ltbZnMb3BBc72LHOAB1PpWtI8UQzJNFGO+9wMfnVOfWdGhbbPqthGw6gzrn8hWcqk5KzNIwjF3Rf7VkXHhXwpd6jNqV34X0a6vZ5PMlnmtFZ3f+8c9/wqOXxZ4cjBP9qxv7Rxu+fyFVJ/HmgIv7uPUJj222+3P5mlFTWwNx6nS2sFvaQJbWlvDbQRjCRQxhETJzwBwOSTVgSygACRlA9Dj+VcRN8QbQBjb6RdOR3klVc/lmqsvxAvWB8nRoE54Mk5bI+gA/nT5JPoTzxXU77k0navOJ/G2vOMRpYwA91hLH9TVR/FPiWQH/AImzIe3lQov9DT9lIXtYnqgDHgKTTjG+PuN+VePyazrkhbzNc1Bs9cTFf5YqpI9xKR517eS85+e4dv5mn7Ji9oj2SR4IQzTTwxjOSXkAqjNruhxEh9Ws129cSg/yryRoYictGpx3Iyaeqqv3QPypqj5h7Y9Rk8XeG4x/yEvN9ooXf+QqrJ470Nf9XBqMuP8ApiFH6tXngwM8ckdaFzjA5HerVJEuqzupvH9t/wAsNGuW44Mkyj+Qqu/j2/ZT5Wj2iHt5kzNj8sVyGMICeTQTjnrT9nFC52dLL4419z+6XT4R6fZy+PxLVUm8U+JJiM6vJEMf8sYkTP6Vj/SnAHOaORC5mWp9T1e44n1i/cE5IMzDP5VUYFn3SM0h/wBti2fzp3Xk0Y4z0+lPlSC7FEcYX7op3GcY6dzSdh7UpwRkUABOThcDtXOWP2yPxf4nk024+z6hGmnSW8wONjKhP+Iz610Q4IOOaydOQJ4418A/6ywspB+G9aqPUTNCxhFvZw25bPloFJ3E5Prk8k+561Ocr0PIoAGOlOA4wevvU2GU9LsILJZfJU/vXLsGOQM9h6Cri5xzQcAjHelHuKGgFA4605emMU33zSg8HHNKwCgY5pwOe9J1HNKCPxNOwCg84PWlP0z7+lJ79qUY/CgAXAHTilGPbFBxn1ozn6ikhjsenbtSAd/Wjv6+1A9+cUMGL3x2oxR2znFOA4z1pCClxxQMjsaO/PWmB1PwvTOu304HzRWe0H03Oo/xrvC31rh/hr5qprc8IUyeVGke7puySM+3FdGkV8b11lvbhwkagiOMKpbuf/rVzztc6ILQ+fwMnk0rYAIxk+uaAB8/seKG4FdxyCBe+cCnHrwccUxetSdhQA0A9jmlPJz0pT9/HalAGcUgDoBj9aXp6UmOKcOmaQCg8ZHp+VIAAzOhdGfBbY5XJHTOKcfu0mP5UAHlRlizLuJ6luc05UjHSNAPYUqAUv8AjQAvGDkAf1py4zgDimr609ec5pgJ3yQD6U7pxSADNC96AFOCRijIFKOlKOTzSYCY9qceDnGcUetIvOaQXAYNLx2NKO1KaYBjP1pQOOaVhxSUAL1HelGf8aUAbm46UN1/CkxoVeckDPtS9ehpgJ3EZOOKkA/nQIUdfWnKPzpnvTiMUikLwDil6Z6ZPtTfenmkMQdcnnHWsi1IX4g6hGBjfokD5/3Z2H9a1zxWFGT/AMLUlXt/wjg4/wC29VETN8dOoFGfSgjp9DTcncPrSGO7cUBhzzTZOv4UCnYB+RwT+VIDk5HSmx8vTwBmpY2OB96dnANR4p56ChaiFGOuad0Oc0zooPvT34AxSAXvx3pQDnk0L1NInP50gQ7nOR3pVzwM896AAetKOOlAxSKcBxzx9KaCSxzS5IYDPWgGOGD2pOq0p4b8KTGDxTA7T4Z86dqrdT9qiX3+61dDI8RuZQZLiRlIBjjJwnHfHesX4Z/L4cunH3mvzk+uEXH86zr2/vW1m+iNzIEWXhQcAcD0rnnozogtD//Z';

// 3장의 이미지에서 추출한 초기 목적지 데이터 (총 45개 항목)
const INITIAL_DATA = [
  // Image 1 - ASIA (표기: AISA)
  { id: 'asia-nrt', region: 'ASIA', code: 'NRT', slic: '6999JN', dest: '나리타', aliases: '일본 도쿄' },
  { id: 'asia-kix', region: 'ASIA', code: 'KIX', slic: '6963JP', dest: '간사이', aliases: '일본 오사카' },
  { id: 'asia-pek', region: 'ASIA', code: 'PEK', slic: '1542CN', dest: '베이징', aliases: '중국 북경' },
  { id: 'asia-icn', region: 'ASIA', code: 'ICN', slic: '8669', dest: '인천', aliases: '한국 서울' },

  // Image 3 - ASIA (표기: AISA)
  { id: 'asia-cgo', region: 'ASIA', code: 'CGO', slic: '0569', dest: '정저우', aliases: '중국 정주' },
  { id: 'asia-tpe', region: 'ASIA', code: 'TPE', slic: '8879', dest: '타이페이', aliases: '타이베이 대만' },
  { id: 'asia-sin', region: 'ASIA', code: 'SIN', slic: '8869', dest: '싱가포르', aliases: '싱가폴' },
  { id: 'asia-szx', region: 'ASIA', code: 'SZX', slic: '0009', dest: '선전', aliases: '중국 심천' },
  { id: 'asia-hkg', region: 'ASIA', code: 'HKG', slic: '8489', dest: '홍콩', aliases: '' },
  { id: 'asia-mnl', region: 'ASIA', code: 'MNL', slic: '8899PH', dest: '마닐라', aliases: '필리핀' },
  { id: 'asia-dxb', region: 'ASIA', code: 'DXB', slic: '8049', dest: '두바이', aliases: '아랍에미리트 UAE' },
  { id: 'asia-bkk', region: 'ASIA', code: 'BKK', slic: '8889', dest: '방콕', aliases: '태국' },
  { id: 'asia-pvg', region: 'ASIA', code: 'PVG', slic: '8479', dest: '푸동', aliases: '중국 상하이 상해 푸둥' },
  { id: 'asia-sgn', region: 'ASIA', code: 'SGN', slic: '8469VN', dest: '호치민', aliases: '베트남' },
  { id: 'asia-syd', region: 'ASIA', code: 'SYD', slic: '9639AU', dest: '시드니', aliases: '호주 오스트레일리아' },
  { id: 'asia-del', region: 'ASIA', code: 'DEL', slic: '0849IN', dest: '델리', aliases: '인도 뉴델리' },
  { id: 'asia-tlv', region: 'ASIA', code: 'TLV', slic: '', dest: '이스라엘', aliases: '텔아비브' },
  { id: 'asia-crk', region: 'ASIA', code: 'CRK', slic: '8899PH', dest: '클락', aliases: '필리핀' },
  { id: 'asia-cgk', region: 'ASIA', code: 'CGK', slic: '8659ID', dest: '자카르타', aliases: '인도네시아' },
  { id: 'asia-han', region: 'ASIA', code: 'HAN', slic: '7989VN', dest: '하노이', aliases: '베트남' },

  // Image 1 - EUR
  { id: 'eur-cgn', region: 'EUR', code: 'CGN', slic: '3459', dest: '쾰른', aliases: '독일' },
  { id: 'eur-opo', region: 'EUR', code: 'OPO', slic: '3999PT', dest: '포르투칼', aliases: '포르투갈 포르투' },
  { id: 'eur-fra', region: 'EUR', code: 'FRA', slic: '', dest: '프랑크프루트', aliases: '프랑크푸르트 독일' },
  { id: 'eur-man', region: 'EUR', code: 'MAN', slic: '', dest: '영국(맨체스터)', aliases: '맨체스터' },
  { id: 'eur-lhr', region: 'EUR', code: 'LHR', slic: '', dest: '영국(런던)', aliases: '런던 히드로' },
  { id: 'eur-haj', region: 'EUR', code: 'HAJ', slic: '', dest: '독일(하노버)', aliases: '하노버' },
  { id: 'eur-dus', region: 'EUR', code: 'DUS', slic: '', dest: '독일(뒤셀도르프)', aliases: '뒤셀도르프' },
  { id: 'eur-str', region: 'EUR', code: 'STR', slic: '', dest: '독일(스투트가르트)', aliases: '슈투트가르트' },
  { id: 'eur-ist', region: 'EUR', code: 'IST', slic: '', dest: '튀르키예(이스탄불)', aliases: '터키 이스탄불' },
  { id: 'eur-zrh', region: 'EUR', code: 'ZRH', slic: '', dest: '스위스(취리히)', aliases: '취리히' },

  // Image 2 - US
  { id: 'us-sdf', region: 'US', code: 'SDF', slic: '4049', dest: '루이즈빌', aliases: '미국 루이빌' },
  { id: 'us-ont', region: 'US', code: 'ONT', slic: '9199', dest: '온타리오', aliases: '미국 캘리포니아' },
  { id: 'us-anc', region: 'US', code: 'ANC', slic: '9969US', dest: '앵커리지', aliases: '미국 알래스카' },
  { id: 'us-jfk', region: 'US', code: 'JFK', slic: '1149US', dest: '뉴욕', aliases: '미국' },
  { id: 'us-iad', region: 'US', code: 'IAD', slic: '2219US', dest: '워싱턴', aliases: '미국 덜레스' },
  { id: 'us-atl', region: 'US', code: 'ATL', slic: '3039US', dest: '아틀란타', aliases: '애틀랜타 미국' },
  { id: 'us-lax', region: 'US', code: 'LAX', slic: '9099US', dest: '로스엔젤레스', aliases: '로스앤젤레스 LA 미국' },
  { id: 'us-dfw', region: 'US', code: 'DFW', slic: '7649US', dest: '댈러스', aliases: '달라스 미국' },
  { id: 'us-sfo', region: 'US', code: 'SFO', slic: '', dest: '샌프란시스코', aliases: '미국' },
  { id: 'us-hnl', region: 'US', code: 'HNL', slic: '9689US', dest: '호놀룰루', aliases: '하와이 미국' },
  { id: 'us-ord', region: 'US', code: 'ORD', slic: '6089US', dest: '시카고', aliases: '오헤어 미국' },
  { id: 'us-mex', region: 'US', code: 'MEX', slic: '7796MX', dest: '멕시코', aliases: '멕시코시티' },
  { id: 'us-mty', region: 'US', code: 'MTY', slic: '', dest: '멕시코(몬테레이)', aliases: '몬테레이' },
  { id: 'us-iah', region: 'US', code: 'IAH', slic: '', dest: '미국(휴스턴)', aliases: '휴스턴' },
  { id: 'us-bna', region: 'US', code: 'BNA', slic: '', dest: '미국(네슈빌)', aliases: '내슈빌 네쉬빌' }
];

// 초기 박스 타입별 현장명칭 사전
const INITIAL_ULD_TYPE_DICT = {
  AMP: ''
};

// 초기 ULD 컨테이너 목록 (업로드해주신 이미지의 AMP 27945 UPS/5X 기본 탑재)
const INITIAL_ULD_DATA = [
  {
    id: 'uld-amp-27945',
    fullName: 'AMP 27945 UPS/5X',
    typeCode: 'AMP',
    fieldName: '',
    note: '샘플 등록 컨테이너 (터치하여 현장사용명칭을 입력하세요)',
    photo: SAMPLE_AMP_PHOTO
  }
];

// 한글 초성 추출 함수
const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

function getChosung(str) {
  if (!str) return '';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i) - 44032;
    if (code >= 0 && code <= 11171) {
      result += CHOSUNG_LIST[Math.floor(code / 588)];
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

// 컨테이너 명칭에서 앞의 영문 박스 타입(예: AMP) 자동 추출
function extractBoxType(fullName) {
  if (!fullName) return '';
  const match = fullName.trim().toUpperCase().match(/^([A-Z]{2,4})/);
  return match ? match[1] : '';
}

// 상태 관리
let appMode = 'CODE'; // 'CODE' | 'ULD'
let items = [];
let uldItems = [];
let uldTypeDict = {};

let currentRegion = 'ALL';
let currentUldType = 'ALL';
let searchQuery = '';

let editingId = null;
let editingUldId = null;
let currentUldPhotoData = '';

// DOM 요소
const modeSwitch = document.getElementById('modeSwitch');
const typeDictBtn = document.getElementById('typeDictBtn');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const regionTabs = document.getElementById('regionTabs');
const uldTypeTabs = document.getElementById('uldTypeTabs');
const codeListHeader = document.getElementById('codeListHeader');
const resultsList = document.getElementById('resultsList');
const statusText = document.getElementById('statusText');
const statusHint = document.getElementById('statusHint');
const fabAddBtn = document.getElementById('fabAddBtn');
const fabAddText = document.getElementById('fabAddText');
const fabCameraBtn = document.getElementById('fabCameraBtn');
const quickCameraInput = document.getElementById('quickCameraInput');
const resetDataBtn = document.getElementById('resetDataBtn');

// 목적지 코드 모달 요소
const itemModal = document.getElementById('itemModal');
const modalTitle = document.getElementById('modalTitle');
const closeModalBtn = document.getElementById('closeModalBtn');
const itemForm = document.getElementById('itemForm');
const codeInput = document.getElementById('codeInput');
const slicInput = document.getElementById('slicInput');
const destInput = document.getElementById('destInput');
const deleteItemBtn = document.getElementById('deleteItemBtn');

// ULD 모달 요소
const uldModal = document.getElementById('uldModal');
const uldModalTitle = document.getElementById('uldModalTitle');
const closeUldModalBtn = document.getElementById('closeUldModalBtn');
const uldForm = document.getElementById('uldForm');
const uldPhotoPreview = document.getElementById('uldPhotoPreview');
const photoPlaceholder = document.getElementById('photoPlaceholder');
const uldCameraInput = document.getElementById('uldCameraInput');
const uldGalleryInput = document.getElementById('uldGalleryInput');
const removePhotoBtn = document.getElementById('removePhotoBtn');
const ocrStatusText = document.getElementById('ocrStatusText');
const uldFullNameInput = document.getElementById('uldFullNameInput');
const uldTypeInput = document.getElementById('uldTypeInput');
const uldFieldNameInput = document.getElementById('uldFieldNameInput');
const uldNoteInput = document.getElementById('uldNoteInput');
const deleteUldBtn = document.getElementById('deleteUldBtn');

// 박스 타입 사전 모달 요소
const typeDictModal = document.getElementById('typeDictModal');
const closeTypeDictModalBtn = document.getElementById('closeTypeDictModalBtn');
const addTypeMappingForm = document.getElementById('addTypeMappingForm');
const newTypeCodeInput = document.getElementById('newTypeCodeInput');
const newTypeFieldNameInput = document.getElementById('newTypeFieldNameInput');
const typeDictList = document.getElementById('typeDictList');

// 사진 확대 라이트박스 요소
const photoLightbox = document.getElementById('photoLightbox');
const closeLightboxBtn = document.getElementById('closeLightboxBtn');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

const toastEl = document.getElementById('toast');

let toastTimer = null;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2200);
}

// 데이터 불러오기 및 저장
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        items = parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read code localStorage:', e);
  }
  if (!items || items.length === 0) {
    items = JSON.parse(JSON.stringify(INITIAL_DATA));
    saveData();
  }

  try {
    const rawDict = localStorage.getItem(ULD_TYPE_DICT_KEY);
    if (rawDict) {
      uldTypeDict = JSON.parse(rawDict) || {};
    } else {
      uldTypeDict = { ...INITIAL_ULD_TYPE_DICT };
      saveUldData();
    }
  } catch (e) {
    uldTypeDict = { ...INITIAL_ULD_TYPE_DICT };
  }

  try {
    const rawUld = localStorage.getItem(ULD_STORAGE_KEY);
    if (rawUld) {
      const parsedUld = JSON.parse(rawUld);
      if (Array.isArray(parsedUld)) {
        uldItems = parsedUld;
        return;
      }
    }
  } catch (e) {
    console.error('Failed to read ULD localStorage:', e);
  }
  uldItems = JSON.parse(JSON.stringify(INITIAL_ULD_DATA));
  saveUldData();
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save code localStorage:', e);
  }
}

function saveUldData() {
  try {
    localStorage.setItem(ULD_STORAGE_KEY, JSON.stringify(uldItems));
    localStorage.setItem(ULD_TYPE_DICT_KEY, JSON.stringify(uldTypeDict));
  } catch (e) {
    showToast('저장 공간이 부족합니다. 일부 사진을 정리해 주세요.');
  }
}

// 컨테이너의 실제 현장사용명칭 조회 (개별 명칭 또는 박스 타입 사전 연동)
function resolveFieldName(uldItem) {
  if (uldItem.fieldName && uldItem.fieldName.trim()) {
    return uldItem.fieldName.trim();
  }
  const t = (uldItem.typeCode || '').toUpperCase();
  if (t && uldTypeDict[t]) {
    return uldTypeDict[t];
  }
  return '';
}

// 박스 타입 현장사용명칭 동기화 (한 번 입력하면 같은 박스 타입 컨테이너들에 자동 반영)
function syncTypeFieldName(typeCode, fieldName) {
  const cleanType = (typeCode || '').trim().toUpperCase();
  const cleanName = (fieldName || '').trim();
  if (!cleanType) return;

  if (cleanName) {
    uldTypeDict[cleanType] = cleanName;
    uldItems.forEach((item) => {
      if ((item.typeCode || '').toUpperCase() === cleanType) {
        item.fieldName = cleanName;
      }
    });
  }
}

// 검색 매칭 검사 - 목적지 코드
function matchesCodeItem(item, query) {
  if (!query) return true;
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const code = (item.code || '').toLowerCase();
  const slic = (item.slic || '').toLowerCase();
  const dest = (item.dest || '').toLowerCase();
  const aliases = (item.aliases || '').toLowerCase();
  const region = (item.region || '').toLowerCase();

  if (
    code.includes(q) ||
    slic.includes(q) ||
    dest.includes(q) ||
    aliases.includes(q) ||
    region.includes(q)
  ) {
    return true;
  }

  const destChosung = getChosung(dest);
  const destCleanChosung = getChosung(dest.replace(/[()/\s]/g, ''));
  const aliasChosung = getChosung(aliases);

  return (
    destChosung.includes(q) ||
    destCleanChosung.includes(q) ||
    aliasChosung.includes(q)
  );
}

// 검색 매칭 검사 - ULD 컨테이너
function matchesUldItem(item, query) {
  if (!query) return true;
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const fullName = (item.fullName || '').toLowerCase();
  const typeCode = (item.typeCode || '').toLowerCase();
  const fieldName = resolveFieldName(item).toLowerCase();
  const note = (item.note || '').toLowerCase();

  if (
    fullName.includes(q) ||
    typeCode.includes(q) ||
    fieldName.includes(q) ||
    note.includes(q)
  ) {
    return true;
  }

  const fieldChosung = getChosung(fieldName);
  const noteChosung = getChosung(note);
  return fieldChosung.includes(q) || noteChosung.includes(q);
}

// 검색어 하이라이트 렌더링
function highlightText(text, query) {
  if (!text) return '';
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  if (!query || !query.trim()) return escaped;

  const q = query.trim();
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return escaped;

  const before = text.slice(0, idx).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const match = text.slice(idx, idx + q.length).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const after = text.slice(idx + q.length).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `${before}<mark class="hl">${match}</mark>${after}`;
}

// 목적지 지역 탭 카운트 업데이트
function updateCodeTabCounts() {
  const counts = { ALL: 0, ASIA: 0, EUR: 0, US: 0 };
  items.forEach((item) => {
    if (matchesCodeItem(item, searchQuery)) {
      counts.ALL++;
      if (counts[item.region] !== undefined) counts[item.region]++;
    }
  });
  document.getElementById('count-ALL').textContent = counts.ALL;
  document.getElementById('count-ASIA').textContent = counts.ASIA;
  document.getElementById('count-EUR').textContent = counts.EUR;
  document.getElementById('count-US').textContent = counts.US;
}

// ULD 박스 타입 탭 렌더링
function renderUldTypeTabs() {
  const typeCounts = { ALL: 0 };
  const allTypes = new Set(Object.keys(uldTypeDict));
  uldItems.forEach((it) => {
    if (it.typeCode) allTypes.add(it.typeCode.toUpperCase());
  });

  allTypes.forEach((t) => {
    typeCounts[t] = 0;
  });

  uldItems.forEach((item) => {
    if (matchesUldItem(item, searchQuery)) {
      typeCounts.ALL++;
      const t = (item.typeCode || '').toUpperCase();
      if (t) typeCounts[t] = (typeCounts[t] || 0) + 1;
    }
  });

  if (currentUldType !== 'ALL' && !allTypes.has(currentUldType)) {
    currentUldType = 'ALL';
  }

  let html = `
    <button type="button" class="tab-btn ${currentUldType === 'ALL' ? 'active' : ''}" data-uld-type="ALL">
      전체 <span class="count">${typeCounts.ALL}</span>
    </button>
  `;

  Array.from(allTypes)
    .sort()
    .forEach((t) => {
      const fName = uldTypeDict[t] ? `(${uldTypeDict[t]})` : '';
      const activeClass = currentUldType === t ? 'active' : '';
      html += `
        <button type="button" class="tab-btn ${activeClass}" data-uld-type="${t}">
          ${t} ${fName} <span class="count">${typeCounts[t] || 0}</span>
        </button>
      `;
    });

  uldTypeTabs.innerHTML = html;
}

// 메인 화면 렌더링
function render() {
  if (appMode === 'CODE') {
    renderCodeMode();
  } else {
    renderUldMode();
  }
}

// [모드 1] 목적지 코드 렌더링
function renderCodeMode() {
  updateCodeTabCounts();

  const filtered = items.filter((item) => {
    const regionOk = currentRegion === 'ALL' || item.region === currentRegion;
    return regionOk && matchesCodeItem(item, searchQuery);
  });

  const regionLabel = currentRegion === 'ALL' ? '전체 지역' : currentRegion;
  statusText.textContent = `${regionLabel} · 검색결과 ${filtered.length}건`;
  statusHint.textContent = '항목을 누르면 수정/삭제 가능';

  if (filtered.length === 0) {
    const safeQuery = searchQuery.trim();
    resultsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-title">일치하는 목적지 코드가 없습니다</div>
        <div class="empty-desc">
          ${safeQuery ? `'${safeQuery}'에 대한 검색 결과가 없습니다.` : '해당 지역에 등록된 데이터가 없습니다.'}
        </div>
        <button type="button" class="btn-inline-add" id="inlineAddCodeBtn">＋ 새 코드 직접 추가하기</button>
      </div>
    `;
    const btn = document.getElementById('inlineAddCodeBtn');
    if (btn) btn.addEventListener('click', () => openModalForCreate(safeQuery));
    return;
  }

  resultsList.innerHTML = filtered
    .map((item) => {
      const codeHtml = highlightText(item.code, searchQuery);
      const destHtml = highlightText(item.dest, searchQuery);
      const slicHtml = item.slic
        ? `<span class="slic-badge">${highlightText(item.slic, searchQuery)}</span>`
        : `<span class="slic-empty">미등록</span>`;

      return `
        <div class="item-card" data-id="${item.id}">
          <div class="col-code">
            <span class="code-text">${codeHtml}</span>
            <span class="region-badge region-${item.region}">${item.region}</span>
          </div>
          <div class="col-slic">
            ${slicHtml}
          </div>
          <div class="col-dest">${destHtml}</div>
          <div class="col-action">
            <button type="button" class="edit-btn" aria-label="수정">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    })
    .join('');
}

// [모드 2] ULD 컨테이너 렌더링
function renderUldMode() {
  renderUldTypeTabs();

  const filtered = uldItems.filter((item) => {
    const typeOk =
      currentUldType === 'ALL' ||
      (item.typeCode || '').toUpperCase() === currentUldType;
    return typeOk && matchesUldItem(item, searchQuery);
  });

  const typeLabel = currentUldType === 'ALL' ? '전체 박스 타입' : `${currentUldType} 타입`;
  statusText.textContent = `${typeLabel} · 컨테이너 ${filtered.length}건`;
  statusHint.textContent = '터치하여 현장사용명칭 수정 · 사진 터치 시 확대';

  if (filtered.length === 0) {
    const safeQuery = searchQuery.trim();
    resultsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-title">등록된 ULD 컨테이너가 없습니다</div>
        <div class="empty-desc">
          카메라로 컨테이너 명칭을 촬영하거나 직접 입력해 등록해 보세요.
        </div>
        <button type="button" class="btn-inline-add" id="inlineAddUldBtn">＋ ULD 컨테이너 등록하기</button>
      </div>
    `;
    const btn = document.getElementById('inlineAddUldBtn');
    if (btn) btn.addEventListener('click', () => openUldModalForCreate(safeQuery));
    return;
  }

  resultsList.innerHTML = filtered
    .map((item) => {
      const fullNameHtml = highlightText(item.fullName, searchQuery);
      const typeHtml = highlightText(item.typeCode || '미지정', searchQuery);
      const resolvedField = resolveFieldName(item);

      const fieldBadgeHtml = resolvedField
        ? `<span class="uld-field-badge">현장명칭: ${highlightText(resolvedField, searchQuery)}</span>`
        : `<span class="uld-field-badge unset">＋ 현장사용명칭 입력 (터치)</span>`;

      const thumbHtml = item.photo
        ? `
          <div class="uld-thumb-wrap" data-zoom-id="${item.id}">
            <img src="${item.photo}" class="uld-thumb-img" alt="${item.fullName}" />
            <span class="uld-thumb-zoom">확대</span>
          </div>
        `
        : `
          <div class="uld-thumb-wrap">
            <div class="uld-thumb-empty">
              <span class="icon">📦</span>
              <span>${item.typeCode || 'ULD'}</span>
            </div>
          </div>
        `;

      const noteHtml = item.note
        ? `<div class="uld-note">${highlightText(item.note, searchQuery)}</div>`
        : '';

      return `
        <div class="uld-card" data-uld-id="${item.id}">
          ${thumbHtml}
          <div class="uld-info">
            <div class="uld-title-row">
              <span class="uld-full-name">${fullNameHtml}</span>
              <button type="button" class="edit-btn" aria-label="수정">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </button>
            </div>
            <div class="uld-mapping-row">
              <span class="uld-type-badge">타입: ${typeHtml}</span>
              <span class="uld-arrow">▶</span>
              ${fieldBadgeHtml}
            </div>
            ${noteHtml}
          </div>
        </div>
      `;
    })
    .join('');
}

// 모드 전환 (CODE <-> ULD)
function switchMode(newMode) {
  appMode = newMode;
  modeSwitch.querySelectorAll('.mode-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.mode === newMode);
  });

  if (appMode === 'CODE') {
    regionTabs.style.display = 'grid';
    uldTypeTabs.style.display = 'none';
    codeListHeader.style.display = 'grid';
    typeDictBtn.style.display = 'none';
    fabCameraBtn.style.display = 'none';
    fabAddText.textContent = '＋ 코드 추가';
    searchInput.placeholder = '3CODE, SLIC, 지역명, 초성(예: ㄴㄹㅌ) 검색...';
  } else {
    regionTabs.style.display = 'none';
    uldTypeTabs.style.display = 'flex';
    codeListHeader.style.display = 'none';
    typeDictBtn.style.display = 'inline-flex';
    fabCameraBtn.style.display = 'flex';
    fabAddText.textContent = '＋ ULD 추가';
    searchInput.placeholder = '컨테이너명(AMP 27945), 박스 타입, 현장사용명칭 검색...';
  }

  render();
}

// ==========================================
// 목적지 코드 모달 열기 / 닫기
// ==========================================
function openModalForCreate(prefill = '') {
  editingId = null;
  modalTitle.textContent = '새 목적지 코드 추가';
  deleteItemBtn.style.display = 'none';

  const defaultRegion = currentRegion === 'ALL' ? 'ASIA' : currentRegion;
  const radio = itemForm.querySelector(`input[name="region"][value="${defaultRegion}"]`);
  if (radio) radio.checked = true;

  if (/^[a-zA-Z]{2,4}$/.test(prefill)) {
    codeInput.value = prefill.toUpperCase();
    destInput.value = '';
  } else {
    codeInput.value = '';
    destInput.value = prefill;
  }
  slicInput.value = '';

  itemModal.classList.add('open');
  setTimeout(() => {
    if (!codeInput.value) codeInput.focus();
    else slicInput.focus();
  }, 80);
}

function openModalForEdit(id) {
  const target = items.find((it) => it.id === id);
  if (!target) return;

  editingId = id;
  modalTitle.textContent = `${target.code} (${target.dest}) 정보 수정`;
  deleteItemBtn.style.display = 'inline-block';

  const radio = itemForm.querySelector(`input[name="region"][value="${target.region}"]`);
  if (radio) radio.checked = true;

  codeInput.value = target.code || '';
  slicInput.value = target.slic || '';
  destInput.value = target.dest || '';

  itemModal.classList.add('open');
}

function closeModal() {
  itemModal.classList.remove('open');
  editingId = null;
}

// ==========================================
// ULD 컨테이너 모달 열기 / 닫기 및 이미지 압축·인식
// ==========================================
function updateUldPhotoPreview(dataUrl) {
  currentUldPhotoData = dataUrl || '';
  if (currentUldPhotoData) {
    uldPhotoPreview.src = currentUldPhotoData;
    uldPhotoPreview.style.display = 'block';
    photoPlaceholder.style.display = 'none';
    removePhotoBtn.style.display = 'inline-block';
  } else {
    uldPhotoPreview.src = '';
    uldPhotoPreview.style.display = 'none';
    photoPlaceholder.style.display = 'block';
    removePhotoBtn.style.display = 'none';
  }
}

function openUldModalForCreate(prefill = '', initialPhoto = '') {
  editingUldId = null;
  uldModalTitle.textContent = 'ULD 컨테이너 등록';
  deleteUldBtn.style.display = 'none';
  ocrStatusText.style.display = 'none';

  updateUldPhotoPreview(initialPhoto);

  const defaultType = currentUldType === 'ALL' ? '' : currentUldType;
  uldFullNameInput.value = prefill ? prefill.toUpperCase() : (defaultType ? `${defaultType} ` : '');
  const detectedType = extractBoxType(uldFullNameInput.value) || defaultType;
  uldTypeInput.value = detectedType;
  uldFieldNameInput.value = detectedType && uldTypeDict[detectedType] ? uldTypeDict[detectedType] : '';
  uldNoteInput.value = '';

  uldModal.classList.add('open');
  setTimeout(() => {
    uldFullNameInput.focus();
  }, 80);
}

function openUldModalForEdit(id) {
  const target = uldItems.find((it) => it.id === id);
  if (!target) return;

  editingUldId = id;
  uldModalTitle.textContent = `${target.fullName} 수정`;
  deleteUldBtn.style.display = 'inline-block';
  ocrStatusText.style.display = 'none';

  updateUldPhotoPreview(target.photo || '');

  uldFullNameInput.value = target.fullName || '';
  uldTypeInput.value = target.typeCode || extractBoxType(target.fullName);
  uldFieldNameInput.value = resolveFieldName(target);
  uldNoteInput.value = target.note || '';

  uldModal.classList.add('open');
  setTimeout(() => {
    if (!uldFieldNameInput.value) uldFieldNameInput.focus();
  }, 80);
}

function closeUldModal() {
  uldModal.classList.remove('open');
  editingUldId = null;
}

// 이미지 파일을 모바일 저장용으로 가볍게 리사이즈/압축 (최대 가로 720px JPEG)
function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 720;
        const maxHeight = 720;
        let { width, height } = img;
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.78);
        resolve(compressedDataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// 컨테이너 명칭 입력 시 앞글자 박스 타입 및 저장된 현장사용명칭 자동 매칭
uldFullNameInput.addEventListener('input', () => {
  const detected = extractBoxType(uldFullNameInput.value);
  if (detected) {
    uldTypeInput.value = detected;
    if (uldTypeDict[detected] && !uldFieldNameInput.value.trim()) {
      uldFieldNameInput.value = uldTypeDict[detected];
    }
  }
});

uldTypeInput.addEventListener('input', () => {
  const t = uldTypeInput.value.trim().toUpperCase();
  if (t && uldTypeDict[t] && !uldFieldNameInput.value.trim()) {
    uldFieldNameInput.value = uldTypeDict[t];
  }
});

// 사진 촬영/선택 처리 핸들러
async function handlePhotoSelected(file, openModalFirst = false) {
  if (!file) return;
  try {
    const dataUrl = await compressImageFile(file);
    if (openModalFirst) {
      openUldModalForCreate('', dataUrl);
    } else {
      updateUldPhotoPreview(dataUrl);
    }
    ocrStatusText.style.display = 'block';
    ocrStatusText.textContent = '✅ 사진이 첨부되었습니다. 컨테이너 명칭과 현장사용명칭을 확인·입력해 주세요.';
  } catch (err) {
    showToast('사진을 불러오지 못했습니다.');
  }
}

uldCameraInput.addEventListener('change', (e) => {
  handlePhotoSelected(e.target.files?.[0], false);
  e.target.value = '';
});

uldGalleryInput.addEventListener('change', (e) => {
  handlePhotoSelected(e.target.files?.[0], false);
  e.target.value = '';
});

quickCameraInput.addEventListener('change', (e) => {
  handlePhotoSelected(e.target.files?.[0], true);
  e.target.value = '';
});

removePhotoBtn.addEventListener('click', () => {
  updateUldPhotoPreview('');
  ocrStatusText.style.display = 'none';
});

// ==========================================
// 박스 타입별 현장사용명칭 관리 모달
// ==========================================
function renderTypeDictModalList() {
  const keys = Object.keys(uldTypeDict).sort();
  if (keys.length === 0) {
    typeDictList.innerHTML = `<div class="empty-desc" style="text-align:center; padding: 16px;">등록된 박스 타입이 없습니다.</div>`;
    return;
  }

  typeDictList.innerHTML = keys
    .map(
      (typeCode) => `
      <div class="dict-item" data-dict-type="${typeCode}">
        <div class="dict-item-left">
          <span class="uld-type-badge">${typeCode}</span>
          <span class="uld-arrow">▶</span>
          <input
            type="text"
            class="dict-item-input"
            data-dict-input="${typeCode}"
            value="${(uldTypeDict[typeCode] || '').replace(/"/g, '&quot;')}"
            placeholder="현장사용명칭 입력 후 엔터/포커스이동"
          />
        </div>
        <button type="button" class="dict-item-del" data-dict-del="${typeCode}">삭제</button>
      </div>
    `
    )
    .join('');
}

typeDictBtn.addEventListener('click', () => {
  renderTypeDictModalList();
  typeDictModal.classList.add('open');
});

closeTypeDictModalBtn.addEventListener('click', () => {
  typeDictModal.classList.remove('open');
});

typeDictModal.addEventListener('click', (e) => {
  if (e.target === typeDictModal) typeDictModal.classList.remove('open');
});

addTypeMappingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const code = newTypeCodeInput.value.trim().toUpperCase();
  const fieldName = newTypeFieldNameInput.value.trim();
  if (!code || !fieldName) return;

  syncTypeFieldName(code, fieldName);
  saveUldData();
  newTypeCodeInput.value = '';
  newTypeFieldNameInput.value = '';
  renderTypeDictModalList();
  render();
  showToast(`${code} 타입의 현장사용명칭이 '${fieldName}'(으)로 저장되었습니다.`);
});

typeDictList.addEventListener('change', (e) => {
  const input = e.target.closest('[data-dict-input]');
  if (!input) return;
  const code = input.dataset.dictInput;
  const newName = input.value.trim();
  uldTypeDict[code] = newName;
  syncTypeFieldName(code, newName);
  saveUldData();
  render();
  showToast(`${code} 현장사용명칭이 업데이트되었습니다.`);
});

typeDictList.addEventListener('click', (e) => {
  const delBtn = e.target.closest('[data-dict-del]');
  if (!delBtn) return;
  const code = delBtn.dataset.dictDel;
  delete uldTypeDict[code];
  saveUldData();
  renderTypeDictModalList();
  render();
  showToast(`${code} 타입 매핑이 삭제되었습니다.`);
});

// ==========================================
// 이벤트 바인딩
// ==========================================
modeSwitch.addEventListener('click', (e) => {
  const btn = e.target.closest('.mode-btn');
  if (!btn) return;
  switchMode(btn.dataset.mode);
});

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.classList.toggle('visible', searchQuery.length > 0);
  render();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.classList.remove('visible');
  searchInput.focus();
  render();
});

regionTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  currentRegion = btn.dataset.region;
  regionTabs.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  render();
});

uldTypeTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  currentUldType = btn.dataset.uldType;
  render();
});

resultsList.addEventListener('click', (e) => {
  // 사진 썸네일 클릭 시 확대 보기
  const zoomWrap = e.target.closest('[data-zoom-id]');
  if (zoomWrap) {
    e.stopPropagation();
    const uldId = zoomWrap.dataset.zoomId;
    const target = uldItems.find((it) => it.id === uldId);
    if (target && target.photo) {
      lightboxImg.src = target.photo;
      const fName = resolveFieldName(target);
      lightboxCaption.textContent = `${target.fullName}${fName ? ` · 현장명칭: ${fName}` : ''}`;
      photoLightbox.classList.add('open');
    }
    return;
  }

  // 목적지 카드 클릭
  const codeCard = e.target.closest('.item-card');
  if (codeCard) {
    openModalForEdit(codeCard.dataset.id);
    return;
  }

  // ULD 카드 클릭
  const uldCard = e.target.closest('.uld-card');
  if (uldCard) {
    openUldModalForEdit(uldCard.dataset.uldId);
  }
});

closeLightboxBtn.addEventListener('click', () => {
  photoLightbox.classList.remove('open');
});

photoLightbox.addEventListener('click', (e) => {
  if (e.target === photoLightbox) photoLightbox.classList.remove('open');
});

fabAddBtn.addEventListener('click', () => {
  if (appMode === 'CODE') {
    openModalForCreate(searchQuery.trim());
  } else {
    openUldModalForCreate(searchQuery.trim());
  }
});

fabCameraBtn.addEventListener('click', () => {
  quickCameraInput.click();
});

closeModalBtn.addEventListener('click', closeModal);
closeUldModalBtn.addEventListener('click', closeUldModal);

itemModal.addEventListener('click', (e) => {
  if (e.target === itemModal) closeModal();
});

uldModal.addEventListener('click', (e) => {
  if (e.target === uldModal) closeUldModal();
});

// 목적지 코드 저장 (추가/수정)
itemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedRegion = itemForm.querySelector('input[name="region"]:checked')?.value || 'ASIA';
  const code = codeInput.value.trim().toUpperCase();
  const slic = slicInput.value.trim().toUpperCase();
  const dest = destInput.value.trim();

  if (!code || !dest) {
    showToast('3CODE와 목적지(DEST)를 입력해 주세요.');
    return;
  }

  if (editingId) {
    const idx = items.findIndex((it) => it.id === editingId);
    if (idx !== -1) {
      items[idx] = { ...items[idx], region: selectedRegion, code, slic, dest };
      saveData();
      render();
      closeModal();
      showToast(`${code} 정보가 수정되었습니다.`);
    }
  } else {
    const newItem = {
      id: `custom-${Date.now()}`,
      region: selectedRegion,
      code,
      slic,
      dest,
      aliases: ''
    };
    items.unshift(newItem);
    saveData();
    render();
    closeModal();
    showToast(`${code} (${dest}) 항목이 추가되었습니다.`);
  }
});

// 목적지 코드 삭제
deleteItemBtn.addEventListener('click', () => {
  if (!editingId) return;
  const target = items.find((it) => it.id === editingId);
  if (!target) return;

  if (confirm(`'${target.code} (${target.dest})' 항목을 삭제하시겠습니까?`)) {
    items = items.filter((it) => it.id !== editingId);
    saveData();
    render();
    closeModal();
    showToast(`${target.code} 항목이 삭제되었습니다.`);
  }
});

// ULD 컨테이너 저장 (추가/수정)
uldForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fullName = uldFullNameInput.value.trim().toUpperCase();
  const typeCode = (uldTypeInput.value.trim() || extractBoxType(fullName) || 'ETC').toUpperCase();
  const fieldName = uldFieldNameInput.value.trim();
  const note = uldNoteInput.value.trim();

  if (!fullName || !fieldName) {
    showToast('컨테이너 명칭과 현장사용명칭을 입력해 주세요.');
    return;
  }

  // 박스 타입 사전 및 동일 타입 컨테이너 동기화
  syncTypeFieldName(typeCode, fieldName);

  if (editingUldId) {
    const idx = uldItems.findIndex((it) => it.id === editingUldId);
    if (idx !== -1) {
      uldItems[idx] = {
        ...uldItems[idx],
        fullName,
        typeCode,
        fieldName,
        note,
        photo: currentUldPhotoData
      };
      saveUldData();
      render();
      closeUldModal();
      showToast(`${fullName} (${fieldName}) 정보가 저장되었습니다.`);
    }
  } else {
    const newUld = {
      id: `uld-${Date.now()}`,
      fullName,
      typeCode,
      fieldName,
      note,
      photo: currentUldPhotoData
    };
    uldItems.unshift(newUld);
    saveUldData();
    render();
    closeUldModal();
    showToast(`${fullName} (${fieldName}) 컨테이너가 등록되었습니다.`);
  }
});

// ULD 컨테이너 삭제
deleteUldBtn.addEventListener('click', () => {
  if (!editingUldId) return;
  const target = uldItems.find((it) => it.id === editingUldId);
  if (!target) return;

  if (confirm(`'${target.fullName}' 컨테이너 정보를 삭제하시겠습니까?`)) {
    uldItems = uldItems.filter((it) => it.id !== editingUldId);
    saveUldData();
    render();
    closeUldModal();
    showToast(`${target.fullName} 항목이 삭제되었습니다.`);
  }
});

// 초기 데이터 복원 버튼
resetDataBtn.addEventListener('click', () => {
  if (appMode === 'CODE') {
    if (confirm('추가·수정한 목적지 코드를 초기화하고 원본 데이터(45개)로 복원하시겠습니까?')) {
      items = JSON.parse(JSON.stringify(INITIAL_DATA));
      saveData();
      render();
      showToast('목적지 코드(45개)가 초기 상태로 복원되었습니다.');
    }
  } else {
    if (confirm('ULD 컨테이너 목록을 기본 샘플(AMP 27945 UPS/5X) 상태로 초기화하시겠습니까?')) {
      uldItems = JSON.parse(JSON.stringify(INITIAL_ULD_DATA));
      uldTypeDict = { ...INITIAL_ULD_TYPE_DICT };
      saveUldData();
      render();
      showToast('ULD 컨테이너 데이터가 초기화되었습니다.');
    }
  }
});

// 서비스 워커 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// 앱 시작
loadData();
render();

